import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AUTH_ROUTE, REGISTER_ROUTE } from '../utils/consts';

export default function Register() {
    return (
        <Container className='d-flex justify-content-center align-items-center' style ={{height: window.innerHeight - 54}}>
            <Card style={{width: 500}} className='p-5'>
                <h2 className='m-auto mb-3'>Регистрация</h2>
                <Form.Floating className="mb-3">
                    <Form.Control
                    id="floatingInputCustom"
                    type="email"
                    placeholder="name@example.com"
                    
                    />
                    <label htmlFor="floatingInputCustom">Email</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                    <Form.Control
                    id="floatingPasswordCustom"
                    type="text"
                    placeholder="Password"
                    />
                    <label htmlFor="floatingPasswordCustom">Пароль</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                    <Form.Control
                    id="floatingPhoneNumberCustom"
                    type="tel"
                    placeholder="Phone number"
                    />
                    <label htmlFor="floatingPhoneNumberCustom">Номер телефона</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                    <Form.Control
                    id="floatingSurnameCustom"
                    type="text"
                    placeholder="Surname"
                    />
                    <label htmlFor="floatingSurnameCustom">Фамилия</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                    <Form.Control
                    id="floatingNameCustom"
                    type="text"
                    placeholder="Name"
                    />
                    <label htmlFor="floatingNameCustom">Имя</label>
                </Form.Floating>
                <Button type="submit" className='mt-3'>Зарегистрироваться</Button>
                <NavLink to={AUTH_ROUTE} className='mt-3 m-auto'>Авторизоваться</NavLink>
            </Card>
        </Container>
    )
}