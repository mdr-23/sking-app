import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import { Link } from "react-router-dom";

function PurchaseMessage(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
    <>
      <Button className="detalle-btn mt-1" onClick={handleShow}>
        Confirmar compra
      </Button>

      <Modal show={show} onHide={handleClose} className="text-center">
          <div className="modal-bg">
          <Modal.Header className='modal-header'>
            <Modal.Title className="mx-auto modal-title">¡Gracias!</Modal.Title>
          </Modal.Header>
        <Modal.Body className="modal-body">
            <p> Tu compra ha sido confirmada. Toma un globo de regalo.</p>
            <img src={require('../img/pennywise.png')} height='180' className='mx-auto' alt="" />
        </Modal.Body>
        <Modal.Footer className='modal-footer'>
          <Link to='/'><Button className="detalle-btn mt-1">
            Volver al inicio
          </Button></Link>
        </Modal.Footer>
        </div>
      </Modal>
    </>
    )

}

export default PurchaseMessage