import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Moment from 'react-moment'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { bookService } from '../services'

import 'moment/locale/tr'

function BookCard(props) {
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();

    const deleteBook = (id) => {
        MySwal.fire({
            title: 'Emin misiniz?',
            html: <span><strong>{props.name}</strong> isimli kitap kalıcı olarak silinecektir.<br />Bu işlemi gerçekleştirmek istiyor musunuz?</span>,
            icon: 'warning',
            confirmButtonColor: '#d33',
            confirmButtonText: <span><FontAwesomeIcon icon="fa-solid fa-trash-can" fixedWidth /> Evet, sil!</span>,
            showCancelButton: true,
            cancelButtonText: 'İptal',
            allowOutsideClick: false,
            allowEscapeKey: false
        }).then(async (result) => {
            if (result.isConfirmed) {
                await bookService.remove(id)
                    .then((response) => {
                        MySwal.fire({
                            title: 'İşlem Başarılı!',
                            html: <span><strong>{props.name}</strong> isimli kitap kalıcı olarak silindi.</span>,
                            icon: 'success',
                            confirmButtonColor: '#198754',
                            confirmButtonText: <span><FontAwesomeIcon icon="fa-solid fa-thumbs-up" fixedWidth /> Tamam!</span>,
                            allowOutsideClick: false,
                            allowEscapeKey: false
                        }).then(() => {
                            if (props.isDetail)
                                return navigate('/');
                            props.getData();
                        })
                    })
            }
        })
    };

    return (
        <Card className='book-card shadow-sm'>
            <Link to={`/detail/${props.id}`} className='book-image'>
                <Card.Img variant='top' src={props.image} />
            </Link>
            <Card.Body>
                <div className='text-center'>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.author}</Card.Text>
                    <h3 className='mb-3'><small className='fs-5'>₺</small>{props.price}</h3>
                    <div className='d-inline-flex mb-3'>
                        <div className='d-flex flex-column gap-3'>
                            <div className='d-flex flex-row justify-content-center gap-3'>
                                <Link to={`/update/${props.id}`} className='btn btn-success'>
                                    <FontAwesomeIcon icon='fa-solid fa-pencil' fixedWidth /> Düzenle
                                </Link>
                                <Button variant='danger' onClick={() => deleteBook(props.id)}>
                                    <FontAwesomeIcon icon='fa-solid fa-trash-can' fixedWidth /> Sil
                                </Button>
                            </div>
                            {!props.isDetail ? (
                                <Link to={`/detail/${props.id}`} className='btn btn-primary'>
                                    <FontAwesomeIcon icon='fa-solid fa-magnifying-glass' fixedWidth /> İncele
                                </Link>
                            ) : null}
                        </div>
                    </div>
                    {props.isDetail ? (
                        <Card.Text><small className='text-muted'><Moment locale='tr' fromNow titleFormat="D MMMM YYYY HH:ss" withTitle>{props.createdAt}</Moment> oluşturuldu.</small></Card.Text>
                    ) : null}
                </div>
            </Card.Body>
        </Card>
    )
}

export default BookCard