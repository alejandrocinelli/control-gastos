import React from "react"
import { useEffect, useState } from "react"
import {CircularProgressbar} from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'

function ControlPresupuesto({presupuesto,gastos,setGastos,setPresupuesto,setpresupuestoValido}) {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
    const [porcentaje,setPorcentaje] = useState(0)

    useEffect(() => {
     // recorrer los gastos y sumar el total
        const totalGastos = gastos.reduce((total, gasto)=> gasto.cantidad + total,0) // aca use el metodo reduce que utiliza una funcion para sumar los valores de un array
      
         setGastado(totalGastos)
         setDisponible(presupuesto - totalGastos)
         setPorcentaje(((totalGastos * 100)/presupuesto).toFixed(2))
       
    }, [gastos])
    
    function handleReset() {
    
        setGastos([])
        setPresupuesto(0)
        setpresupuestoValido(false)
        
    }

    function FomateadorPresu(cantidad) {
        return cantidad.toLocaleString('en-US', {
            style: 'currency', currency: 'USD'})
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas" >
        <div>
            <CircularProgressbar 
            value={porcentaje} // representa el porcentaje de gasto recibe entre 0 y 100
            text={`${porcentaje}% Gastado`}
            />
        </div>
    <div className="contenido-presupuesto">
        <button className="reset-app" 
        type="button" 
        onClick={handleReset}
        > Resetear App</button>
        <p>
            <span>Presupuesto:</span>{FomateadorPresu(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? "negativo" : ""} `}>
            <span>Disponible: </span>${disponible}
        </p>
        <p>
            <span>Gastado: </span>${gastado}
        </p>
    </div>

    </div>
  )
}
export default ControlPresupuesto