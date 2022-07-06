import { useState } from 'react'
import Header from './componentes/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './componentes/Modal'
import ListadoGastos from './componentes/ListadoGastos'

function App() {
 
  const [presupuesto,setPresupuesto] = useState(0)
  const [presupuestoValido,setpresupuestoValido] = useState(false)
  const [modal,setModal]= useState(false)
  const [animationModal,setAnimationModal] = useState(false)
  const [gastos,setGastos] = useState([])

  const handlerNuevoGasto = () => {
   
    setModal(true)
    setTimeout(()=> {
        setAnimationModal(true)
    },500)

  }

  const guardarGasto = (gasto) => {
    setGastos([...gastos,gasto])
    setAnimationModal(false)
    setTimeout(()=> {
      setModal(false)
    },500)
  }

  return (
  <div className={modal ? "fijar" : ""}>
    <Header 
    presupuesto={presupuesto} 
    setPresupuesto={setPresupuesto}
    presupuestoValido={presupuestoValido}
    setpresupuestoValido={setpresupuestoValido}
    />

    {presupuestoValido ? ( <> 
      <main> 
       <ListadoGastos gastos={gastos}/> 
      </main>
      <div className='nuevo-gasto'>
       <img src={IconoNuevoGasto} alt="icono nuevo gasto" 
        onClick={handlerNuevoGasto}
      />
    </div> </> ): null }

    {modal && <Modal 
    setModal={setModal} 
    animationModal={animationModal} 
    setAnimationModal={setAnimationModal} 
    guardarGasto={guardarGasto}/>}
    
  </div>
  )
}

export default App
