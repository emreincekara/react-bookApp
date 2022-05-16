import React from 'react'
import { Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function BookForm() {
    return (
        <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><FontAwesomeIcon icon="fa-solid fa-book" fixedWidth /> Kitap Adı</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label><FontAwesomeIcon icon="fa-solid fa-user" fixedWidth /> Yazar Adı</Form.Label>
                <Form.Control type="text" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label><FontAwesomeIcon icon="fa-solid fa-credit-card" fixedWidth /> Fiyat</Form.Label>
                <Form.Control type="text" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label><FontAwesomeIcon icon="fa-solid fa-image" fixedWidth /> Kapak Resmi</Form.Label>
                <Form.Control type="text" placeholder="name@example.com" />
            </Form.Group>
        </div>
    )
}

export default BookForm