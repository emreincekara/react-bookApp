import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import NumberFormat from 'react-number-format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function BookForm(props) {
    const [book, setBook] = useState(props.book)

    useEffect(() => {
        setBook(props.book)
    }, [props])

    const handleInputChange = event => {
        const { name, value } = event.target
        setBook({ ...book, [name]: value })
    }

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        else{
            props.onSubmit(book)
        }
        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="input-name">
                <Form.Label><FontAwesomeIcon icon="fa-solid fa-book" fixedWidth /> Kitap Adı</Form.Label>
                <Form.Control type="text" name='name' placeholder="Kitap Adı" value={book.name} onChange={handleInputChange} required />
                <Form.Control.Feedback type="invalid">Bu alan boş geçilemez.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="input-author">
                <Form.Label><FontAwesomeIcon icon="fa-solid fa-user" fixedWidth /> Yazar Adı</Form.Label>
                <Form.Control type="text" name='author' placeholder="Yazar Adı" value={book.author} onChange={handleInputChange} required />
                <Form.Control.Feedback type="invalid">Bu alan boş geçilemez.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="input-price">
                <Form.Label><FontAwesomeIcon icon="fa-solid fa-credit-card" fixedWidth /> Fiyat</Form.Label>
                <NumberFormat name='price' className="form-control" placeholder='0' decimalSeparator="," prefix="₺" value={parseFloat(book.price)}
                    onValueChange={(values, sourceInfo) => {
                        setBook({ ...book, price: values.value });
                    }} required />
                <Form.Control.Feedback type="invalid">Bu alan boş geçilemez.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="input-image">
                <Form.Label><FontAwesomeIcon icon="fa-solid fa-image" fixedWidth /> Kapak Resmi</Form.Label>
                <Form.Control type="url" name='image' placeholder="https://example.com/image.png" value={book.image} onChange={handleInputChange} required />
                <Form.Control.Feedback type="invalid">Geçersiz Url formatı ya da boş geçilemez.</Form.Control.Feedback>
            </Form.Group>
            <div className="text-center">
                {props.isUpdate ?
                    <Button variant="success" type="submit">
                        <FontAwesomeIcon icon="fa-solid fa-pencil" fixedWidth /> Düzenle
                    </Button> :
                    <Button variant="primary" type="submit">
                        <FontAwesomeIcon icon="fa-solid fa-plus" fixedWidth /> Ekle
                    </Button>
                }
            </div>
        </Form>
    )
}

export default BookForm