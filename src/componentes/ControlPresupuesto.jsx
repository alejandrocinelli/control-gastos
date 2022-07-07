import React from "react"
import { useEffect, useState } from "react"

function ControlPresupuesto({presupuesto,gastos}) {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
     // recorrer los gastos y sumar el total
        const totalGastos = gastos.reduce((total, gasto)=> gasto.cantidad + total,0) // aca use el metodo reduce que utiliza una funcion para sumar los valores de un array
      
         setGastado(totalGastos)
         setDisponible(presupuesto - totalGastos)
       
    }, [gastos])
    

    function FomateadorPresu(cantidad) {
        return cantidad.toLocaleString('en-US', {
            style: 'currency', currency: 'USD'})
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas" >
        <div>
            Grafica
        </div>
    <div className="contenido-presupuesto">
        <p>
            <span>Presupuesto:</span>{FomateadorPresu(presupuesto)}
        </p>
        <p>
            <span>Disponible: </span>{disponible}
        </p>
        <p>
            <span>Gastado: </span>{gastado}
        </p>
    </div>

    </div>
  )
}
export default ControlPresupuesto