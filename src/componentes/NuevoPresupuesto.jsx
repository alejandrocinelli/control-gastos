import React from "react"
import {useState} from "react"
import Mensaje from "./Mensaje"

function NuevoPresupuesto({presupuesto,setPresupuesto,presupuestoValido,setpresupuestoValido}) {
    //hay que hacer una funcion que verifique que sea un numero antes de mandar por setPresupuesto
const [mensaje, setMensaje] = useState("")


const handlerSubmit = (e) => {
    e.preventDefault()
   if(!(presupuesto)|| (presupuesto)<0){
   setMensaje("No es un presupuesto correcto")
   setpresupuestoValido(false)
   return
   }
   
   setMensaje("")
     //console.log(typeof presupuesto)
    setpresupuestoValido(true)
    //console.log(presupuestoValido)
  

}

  return (
    <div className="contenedor-presupuesto contenedor sombra">
       <form className="formulario" onSubmit={handlerSubmit}>
            <div className="campo">
                <label>Definir Presupuesto</label>
                <input type="number" 
                className="nuevo-presupuesto"
                placeholder="Ingrese su presupuesto"
                value={presupuesto}
                onChange = {e => setPresupuesto(Number(e.target.value))}
                />
             </div>
        <input type="submit" value="Añadir"/>
        {mensaje && <Mensaje tipo={"error"}> {mensaje}</Mensaje> }
       </form>
    </div>
  )
}
export default NuevoPresupuesto