import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {ctrlUser} from '../auxs/ControladoresUsuarios.js'

function ModalInicioSesion() {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
    <>
    <a type='button' onClick={handleShow}>
        Inicio de Sesion
    </a>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{"background-color" : "rgb(77, 127, 221)"}}>
        <Modal.Title style={{"color" : "white"}}>Formulario de Inicio de Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form action="">
                <div className="row">
                    <label for="formGroupExampleInput" className="form-label"><strong>Ingrese su DNI/Documento</strong></label>
                    <div className=" form-group input-group flex-nowrap">
                        <input type="text" name="" className="form-control" id="DNIini" required/>
                    </div>
                    <label for="formGroupExampleInput" className="form-label mt-2"><strong>Ingrese una contraseña</strong></label>
                    <div className="form-group mt-2 input-group flex-nowrap">
                        <input type="password" className="form-control" name="" id="ContraseñaIni"  required/>
                    </div>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <button className='d-none d-md-inline appointment-btn scrollto btn btn-primary regButton' onClick={handleClose}>
                Cerrar
            </button>
        
            <button className='d-none d-md-inline appointment-btn scrollto btn btn-primary' onClick={() => { ctrlUser.postLogin("http://localhost:3000/login", document.getElementById('DNIini').value, document.getElementById('ContraseñaIni').value)}}>
                Ingresar
            </button>
        </Modal.Footer>
    </Modal>
    </>
);
}

export default ModalInicioSesion
