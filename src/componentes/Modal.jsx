import CloseBtn from '../img/cerrar.svg';
import {useState} from 'react'
import Mensaje  from './Mensaje'

function Modal({setModal,animationModal, setAnimationModal,guardarGasto}) {

const [mensaje,setMensaje] = useState("")
const [nombre,setNombre] = useState('')
const [cantidad,setCantidad] = useState(0)
const [categoria,setCategoria]= useState('')


  function OcultarModal (){
        console.log("OcultarModal")
    setAnimationModal(false)
    setTimeout(()=> {
      setModal(false)
    },500)
  }

//funcion validar gasto y agregarlo a un arreglo de gastos

function handlerSubmit(e) {
  e.preventDefault()
  if([nombre,cantidad,categoria].includes('')){ //si algun campo esta vacio falla la validacion 
    setMensaje("Todos los campos son obligatorios")

    setTimeout(()=> { // este timeout es para que el mensaje desaparezca despues de un segundo
      setMensaje("")
    },2000 )
    return
  }

  function generarID(){
    const random = Math.random().toString(36).substring(2) 
        const date = Date.now().toString(36)
        return random + date
  }

  
 guardarGasto({nombre,cantidad,categoria, id:generarID(), fecha: Date.now()})

}

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseBtn} alt="cerrar modal" 
         onClick={OcultarModal}
        />
       
      </div>

    <form onSubmit={handlerSubmit} className={`formulario ${animationModal ? "animar" : "cerrar"}`}>
      <legend>Nuevo Gasto</legend>

      {mensaje && <Mensaje tipo={"error"}> {mensaje}</Mensaje> }
      <div className='campo'>
        <label htmlFor="nombre">Nombre Gasto</label>
        <input id='nombre' type="text" value={nombre} placeholder='Añade el nombre del gasto' onChange={e => setNombre(e.target.value)} />

      </div>
      <div className='campo'>
        <label htmlFor="cantidad">Cantidad</label>
        <input id='cantidad' type="number" value={cantidad} placeholder='Añade la cantidad' onChange={e=> setCantidad(Number(e.target.value))}/>

      </div>

      <div className='campo'>
        <label htmlFor="categoria">Categoria</label>
        <select name="" id="categoria" value={categoria} onChange={e=> setCategoria(e.target.value)} >

          <option value="">Selecciona una categoria</option>
          <option value="ahorro">Ahorro</option>
          <option value="comida">Comida</option>
          <option value="casa">Casa</option>
          <option value="gasto">Gasto Varios</option>
          <option value="ocio">Ocio</option>
          <option value="suscripciones">Suscripciones</option>
          <option value="salud">Salud</option>

          </select>
      </div>      
    <input type="submit" value="Añadir Gasto" />

    </form>

    </div>
  )
}
export default Modal