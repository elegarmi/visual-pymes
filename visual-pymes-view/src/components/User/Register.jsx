import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Register.css";

const Register = () => {
    return (
        <Form className="register__form">
            <h5>Registrar</h5>
            <Form.Group className="mb-3" controlId="formUserName">
                <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
                <Form.Control type="number" placeholder="Teléfono" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMail">
                <Form.Control as="text" type="text" placeholder="Mail" />
            </Form.Group>
            
            <h5>¿Quieres crear anuncios?</h5>
            <p>Entonces rellena también estos datos:</p>

            <Form.Group className="mb-3" controlId="formBrandName">
                <Form.Control type="text" placeholder="Nombre de la empresa" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAddress">
                <Form.Control type="text" placeholder="Dirección" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMail">
                <Form.Control as="textarea" type="textarea" placeholder="Descripción" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCheckbox">
                <Form.Check type="checkbox" label="Acepto las condiciones de uso y la Protección de Datos" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Crear
            </Button>
        </Form >
    );
};

export default Register;
