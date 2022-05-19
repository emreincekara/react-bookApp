import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Row, Col, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import BookForm from '../../components/bookForm'

import { bookService } from '../../services'

function Add() {
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);

    const initBookState = {
        id: null,
        name: "",
        author: "",
        price: "",
        image: ""
    };
    const [book, setBook] = useState(initBookState);

    const onSubmit = async (addedBook) => {
        await bookService.add(addedBook).then((response)=>{
            MySwal.fire({
                title: 'Başarılı!',
                html: <span><strong>{addedBook.name}</strong> isimli kitap eklendi.</span>,
                icon: 'success',
                confirmButtonText: <span><FontAwesomeIcon icon="fa-solid fa-thumbs-up" fixedWidth /> Tamam!</span>,
                allowOutsideClick: false,
                allowEscapeKey: false
            }).then(() => {
                navigate(`/detail/${response.id}`);
            })
        })
    }

    return (
        <Row className='justify-content-md-center'>
            <Col lg={6}>
                <Card>
                    <Card.Body>
                        <h2>Yeni Kitap Ekle</h2>
                        <hr />
                        <BookForm book={book} isUpdate={false} onSubmit={onSubmit} />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default Add