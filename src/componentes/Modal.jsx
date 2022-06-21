import CloseBtn from '../img/cerrar.svg';

function Modal({setModal}) {

  function OcultarModal (){
    
    setModal(false)
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseBtn} alt="cerrar modal" 
         onClick={OcultarModal}
        />
       
      </div>
    </div>
  )
}
export default Modal