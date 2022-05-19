import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import { Row, Col, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import BookForm from '../../components/bookForm'

import { bookService } from '../../services'

function Update(props) {
    const { id } = useParams();
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

    useEffect(() => {
        async function getData() {
            const response = await bookService.getById(id);
            setBook(response)
        }
        getData();
    }, [id]);

    const onSubmit = async (updatedBook) => {
        await bookService.update(id, updatedBook).then((response) => {
            MySwal.fire({
                title: 'Başarılı!',
                html: <span><strong>{response.name}</strong> isimli kitap güncellendi.</span>,
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
                        <h2>Düzenle</h2>
                        <hr />
                        <BookForm book={book} isUpdate={true} onSubmit={onSubmit} />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default Update