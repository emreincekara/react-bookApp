import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Paginate from 'react-paginate';

import BookCard from '../components/bookCard'

import { bookService } from '../services'

function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await bookService.getAll();
        setBooks(response)
    }

    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    let showPerPage = 9;

    const handlePageClick = (data) => {
        setCurrentPageNumber(data.selected !== false && data.selected + 1);
    };

    const indexOfLastItem = currentPageNumber * showPerPage;
    const indexOfFirstItem = indexOfLastItem - showPerPage;
    const currentPageItem = books.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <Row className='row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4'>
            {currentPageItem && currentPageItem.map(item =>
                <Col key={item.id}>
                    <BookCard
                        getData={getData}
                        id={item.id}
                        name={item.name}
                        author={item.author}
                        image={item.image}
                        price={item.price} />
                </Col>
            )}
            <Paginate
                nextClassName = "page-item"
                previousClassName = "page-item"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"
                pageClassName = "page-item"
                pageLinkClassName="page-link"
                previousLabel="&laquo;"
                nextLabel="&raquo;"
                pageCount={Math.ceil(books.length / showPerPage)}
                marginPagesDisplayed={0}
                pageRangeDisplayed={5}
                containerClassName={"pagination mt-5 justify-content-center align-items-center w-100"}
                activeClassName={"active page-item"}
                activeLinkClassName={"page-link"}
                onPageChange={handlePageClick}
                breakLabel={""}
            />
        </Row>
    )
}
export default Home