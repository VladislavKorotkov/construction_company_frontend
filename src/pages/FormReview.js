import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { AUTH_ROUTE, PROJECTS_ROUTE, PROJECT_ROUTE, REGISTER_ROUTE, SPECIALITIES_ROUTE } from '../utils/consts';
import { registration } from '../http/userApi';
import { addSpeciality } from '../http/SpecialitiesApi';
import { addReview } from '../http/ReviewApi';

export default function FormReview() {
    
    const {id} = useParams()
    const [message, setMessage] = useState('');
    const navigate = useNavigate()

    const handleCreateReview = async(event)=>{
        event.preventDefault();
        try{
            const data = await addReview(message, id)
            navigate(PROJECTS_ROUTE)
        }
        catch (error) {
            if (error.response && error.response.data) {
                alert(error.response.data);
            } else {
                console.error(error);
                alert("Произошла ошибка при добавлении отзыва");
            }
        }
    }
    return (
        <Container className='d-flex justify-content-center align-items-center' style ={{height: window.innerHeight - 54}}>
            <Card style={{width: 500}} className='p-5'>
                <h2 className='m-auto mb-3'>Добавление отзыва</h2>
                <Form onSubmit={handleCreateReview}>
                    <Form.Floating className="mb-3">
                        <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        required
                        maxLength={30}
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        />
                        <label htmlFor="floatingInputCustom">Отзыв</label>
                    </Form.Floating>
                    <div className="text-center">
                        <Button type="submit" className='mt-1'>
                            Создать
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    )
}