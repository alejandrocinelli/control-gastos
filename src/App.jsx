import { useState, useEffect } from 'react'
import Header from './componentes/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './componentes/Modal'
import ListadoGastos from './componentes/ListadoGastos'
import Filtros from './componentes/Filtros'

function App() {
 
  const [presupuesto,setPresupuesto] = useState(Number(localStorage.getItem('presupuesto')?? 0))
  const [presupuestoValido,setpresupuestoValido] = useState(false)
  const [modal,setModal]= useState(false)
  const [animationModal,setAnimationModal] = useState(false)
  const [gastos,setGastos] = useState( 
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : [])
  const [gastoEditar,setGastoEditar] = useState({})
  const [filtro,setFiltro]= useState('')
  const [gastosFiltrados,setGastosFiltrados] = useState([])

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
      setModal(true)
      setTimeout(()=> {
        setAnimationModal(true)
      },500)
    }
   
  }, [gastoEditar])

  useEffect(() => {
    localStorage.setItem('presupuesto',presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('gastos',JSON.stringify(gastos) ?? [])
  }, [gastos])
  
  useEffect(() => {
   
    if(filtro){
      
      const filtrado = gastos.filter( p => p.categoria === filtro)
     setGastosFiltrados(filtrado)
    }

  }, [filtro])
  
  
  useEffect(() => {
    const presupuestoLs = Number(localStorage.getItem('presupuesto')?? 0)
    if(presupuestoLs > 0){
      //setPresupuesto(presupuestoLs)
      setpresupuestoValido(true)
    }

  }, [])

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
    setGastos={setGastos}
    presupuesto={presupuesto} 
    setPresupuesto={setPresupuesto}
    presupuestoValido={presupuestoValido}
    setpresupuestoValido={setpresupuestoValido}
    />

    {presupuestoValido ? ( <> 
      <main> 
        <Filtros 
        filtro={filtro}
        setFiltro={setFiltro}
        />
       <ListadoGastos 
       gastos={gastos}
       setGastoEditar={setGastoEditar}
        eliminarGasto={eliminarGasto}
        filtro={filtro}
        gastosFiltrados={gastosFiltrados}
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
