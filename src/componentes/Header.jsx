import React from "react"
import NuevoPresupuesto from "./NuevoPresupuesto"
import App from "../App"
import ControlPresupuesto from "./ControlPresupuesto"

function Header({presupuesto,setPresupuesto,presupuestoValido,setpresupuestoValido}) {
  return (
    <header>
        <h1>Planificador de Gatos</h1>

        {presupuestoValido ? <ControlPresupuesto presupuesto={presupuesto}/> :
        
        <NuevoPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        presupuestoValido={presupuestoValido}
        setpresupuestoValido={setpresupuestoValido}
        />

        }

       
    </header>
  )
}
export default Header