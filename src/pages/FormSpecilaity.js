import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { AUTH_ROUTE, REGISTER_ROUTE, SPECIALITIES_ROUTE } from '../utils/consts';
import { registration } from '../http/userApi';
import { addSpeciality } from '../http/SpecialitiesApi';

export default function FormSpeciality() {
    const [speciality, setSpeciality] = useState('');
    const navigate = useNavigate()

    const handleCreateSpeciality = async(event)=>{
        event.preventDefault();
        try{
            const data = await addSpeciality(speciality)
            navigate(SPECIALITIES_ROUTE)
        }
        catch (error) {
            if (error.response && error.response.data) {
                alert(error.response.data);
            } else {
                console.error(error);
                alert("Произошла ошибка добавлении специальности.");
            }
        }
    }
    return (
        <Container className='d-flex justify-content-center align-items-center' style ={{height: window.innerHeight - 54}}>
            <Card style={{width: 500}} className='p-5'>
                <h2 className='m-auto mb-3'>Создание специальности</h2>
                <Form onSubmit={handleCreateSpeciality}>
                    <Form.Floating className="mb-3">
                        <Form.Control
                        id="floatingInputCustom"
                        type="textx"
                        required
                        maxLength={30}
                        value={speciality}
                        onChange={(event) => setSpeciality(event.target.value)}
                        />
                        <label htmlFor="floatingInputCustom">Название специальности</label>
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