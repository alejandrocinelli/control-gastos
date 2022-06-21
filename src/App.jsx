import { useState } from 'react'
import Header from './componentes/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './componentes/Modal'

function App() {
 
  const [presupuesto,setPresupuesto] = useState(0)
  const [presupuestoValido,setpresupuestoValido] = useState(false)
  const [modal,setModal]= useState(false)

  const handlerNuevoGasto = () => {
   
    setModal(true)

  }

  return (
  <div>
    <Header 
    presupuesto={presupuesto} 
    setPresupuesto={setPresupuesto}
    presupuestoValido={presupuestoValido}
    setpresupuestoValido={setpresupuestoValido}
    />

    {presupuestoValido ? (<div className='nuevo-gasto'>
      <img src={IconoNuevoGasto} alt="icono nuevo gasto" 
      onClick={handlerNuevoGasto}
      
      />
    </div> ): null }

    {modal && <Modal setModal={setModal}/>}
    
  </div>
  )
}

export default App
