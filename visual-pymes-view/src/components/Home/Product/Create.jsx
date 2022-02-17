import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Create.css";

const Create = () => {
    return (
        <Form className="create__form col col-lg-6 col-xs-12">
            <h5>Crear nuevo anuncio</h5>
            <Form.Group className="mb-3" controlId="formProductName">
                <Form.Control type="text" placeholder="Nombre del producto" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPrice">
                <Form.Control aria-label="Cuantía en euros (con coma antes de los decimales)" placeholder="Precio (0,00 €)" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
                <Form.Control as="textarea" type="textarea" placeholder="Descripción" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formProductImg">
              <Form.Control type="file" multiple required />
            </Form.Group> 

            <Form.Group className="mb-3" controlId="formCheckbox">
                <Form.Check type="checkbox" label="Acepto las condiciones de uso y la Protección de Datos" required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Crear
            </Button>
        </Form >
    );
};

export default Create;
