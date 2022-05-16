import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import BookForm from '../../components/bookForm'

function AddBook() {
    return (
        <Card>
            <Card.Body>
                <Form>
                    <BookForm />
                    <div className="text-center">
                        <Button variant="primary" type="submit">
                            <FontAwesomeIcon icon="fa-solid fa-plus" fixedWidth /> Ekle
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default AddBook