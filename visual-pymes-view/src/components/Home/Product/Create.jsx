import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Create.css";

const Create = () => {
    return (
        <Form className="create__form">
            <h5>Crear nuevo anuncio</h5>
            <Form.Group className="mb-3" controlId="formProductName">
                <Form.Control type="text" placeholder="Nombre del producto" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPrice">
                <Form.Control aria-label="Cuantía en euros (con coma antes de los decimales)" placeholder="Precio (0,00 €)" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
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

export default Create;
