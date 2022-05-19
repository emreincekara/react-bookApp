import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Row, Col } from 'react-bootstrap'

import BookCard from '../../components/bookCard'

import { bookService } from '../../services'

function Detail(props) {
    const { id } = useParams();

    const [book, setBook] = useState([]);
    
    useEffect(() => {
        async function getData() {
            const response = await bookService.getById(id);
            setBook(response)
        }
        getData();
    }, [id]);
    
    return (
        <Row className='justify-content-center'>
            <Col lg={6}>
                <BookCard
                    id={book.id}
                    name={book.name}
                    author={book.author}
                    image={book.image}
                    price={book.price}
                    createdAt={book.createdAt}
                    isDetail={true} />
            </Col>
        </Row>
    )
}
export default Detail