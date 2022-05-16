import { Card, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import BookForm from '../../components/bookForm'

function EditBook() {
    return (
        <Card>
            <Card.Body>
                <Form>
                    <BookForm />
                    <div className="text-center">
                        <Button variant="success" type="submit">
                            <FontAwesomeIcon icon="fa-solid fa-pencil" fixedWidth /> Düzenle
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default EditBook