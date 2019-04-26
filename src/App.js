import React from 'react';

//componentes
import Lista from './components/lista'
import Contador from './components/contador'
import Cargando from './components/cargando'

//Estilo general
import './App.css';

class App extends React.Component{

  constructor(){
    super()
    
    //Estado por defecto
    this.state = {
      isFetching: false,
      ciudades : [],
      contador : 10
    }

    //propiedad para guardar el id de setInterval
    this.interval = false
  }

  componentDidMount(){
    //obteniendo los datos 
    this.obtener_datos()
  }

  //metodo encargado en emitir socket
  obtener_datos = () => {
    let obj = this
    let socket = window.socket
    
    if (this.interval) { //limpiando el intervalo en caso de que exista
      window.clearInterval(this.interval);
    }

    obj.setState({ isFetching: true })
    socket.emit("obtener_datos", obj.actualizar_datos);
  }

  //metodo encargado de actualizar el estado e iniciar conteo regresivo
  actualizar_datos = (data) => {
    this.setState(() => ({
      ciudades: data,
      isFetching: false,
    }))

    //iniciando conteo
    this.interval = this.iniciar_conteo()
  }

  iniciar_conteo = () => {

    //intevalo para actualizar datos cada 10 segundos
    return window.setInterval(() => {

      if(this.state.contador > 1){
        this.setState((state) => ( Object.assign(state, { contador: state.contador - 1 }) ))
      }else{
        //actualizando datos
        this.obtener_datos()

        //restableciendo contador
        this.setState((state) => ( Object.assign(state, { contador: 10 }) ))
      }
      
    },1000)
  }

  render(){
    const {ciudades,isFetching,contador} = this.state 

    return (
      <div className="container">
        <h1 className="title">Ciudades</h1>

        {
          !isFetching ?
            <Contador contador={contador} />
            :
            <Cargando/>
        }

        <Lista ciudades = {ciudades}/>
        
      </div>
    );
  }
}

export default App;
