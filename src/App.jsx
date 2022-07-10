import { useState, useEffect } from 'react'
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
  const [gastoEditar,setGastoEditar] = useState({})

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
      setModal(true)
      setTimeout(()=> {
        setAnimationModal(true)
      },500)
    }
   
  }, [gastoEditar])
  

  const handlerNuevoGasto = () => {
       
    setModal(true)
    setGastoEditar({})
    setTimeout(()=> {
        setAnimationModal(true)
    },500)

  }

  function generarID(){
    const random = Math.random().toString(36).substring(2) 
        const date = Date.now().toString(36)
        return random + date
  }  

  const guardarGasto = (gasto) => {
 
    if(gasto.id){

      const gastoActulizado = gastos.map(gastoStado => gastoStado.id === gasto.id ? gasto : gastoStado)
      setGastos(gastoActulizado)
      setGastoEditar({})
    }
    else {

      gasto.id = generarID()
      gasto.fecha = Date.now()
      setGastos([...gastos,gasto])

    }
    
    setAnimationModal(false)
    setTimeout(()=> {
      setModal(false)
    },500)
  }

  const eliminarGasto = (id) => {
    
    const gastosActuales = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosActuales)
  }

  return (
  <div className={modal ? "fijar" : ""}>
    <Header 
    gastos={gastos}
    presupuesto={presupuesto} 
    setPresupuesto={setPresupuesto}
    presupuestoValido={presupuestoValido}
    setpresupuestoValido={setpresupuestoValido}
    />

    {presupuestoValido ? ( <> 
      <main> 
       <ListadoGastos 
       gastos={gastos}
       setGastoEditar={setGastoEditar}
        eliminarGasto={eliminarGasto}
       /> 
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
    guardarGasto={guardarGasto}
    gastoEditar={gastoEditar}
    setGastoEditar={setGastoEditar}
    />}
    
  </div>
  )
}

export default App
