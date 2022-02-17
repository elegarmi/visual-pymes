import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Create.css";

const Create = (props) => {
    const {title, input1, input2, input3, nameButton } = props;
    return (
        <Form className="create__form">
            <h5>{title}</h5> 
            <Form.Group className="mb-3" controlId="formProductName">
                <Form.Control type="text" placeholder={input1} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPrice">
                <Form.Control aria-label="Cuantía en euros (con coma antes de los decimales)" placeholder={input2} /> 
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
                <Form.Control as="textarea" type="textarea" placeholder={input3} /> 
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCheckbox">
                <Form.Check type="checkbox" label="Acepto las condiciones de uso y la Protección de Datos" />
            </Form.Group>

            <Button variant="primary" type="submit">
                {nameButton}
            </Button>
        </Form >
    );
};

export default Create;
