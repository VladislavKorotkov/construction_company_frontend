import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { AUTH_ROUTE, REGISTER_ROUTE, USERS_ROUTE } from '../utils/consts';
import { registration } from '../http/userApi';

export default function FormUser() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('ROLE_USER');
    const navigate = useNavigate()

    const handleRegister = async(event)=>{
        event.preventDefault();
        try{
            const data = await registration(email, password, name, surname, phoneNumber)
            navigate(USERS_ROUTE)
            // TODO Допилить надо 
        }
        catch (error) {
            if (error.response && error.response.data) {
                alert(error.response.data);
            } else {
                console.error(error);
                alert("Произошла ошибка при регистрации.");
            }
        }
    }
    return (
        <Container className='d-flex justify-content-center align-items-center' style ={{height: window.innerHeight - 54}}>
            <Card style={{width: 500}} className='p-5'>
                <h2 className='m-auto mb-3'>Создание аккаунта</h2>
                <Form onSubmit={handleRegister}>
                    <Form.Floating className="mb-3">
                        <Form.Control
                        id="floatingInputCustom"
                        type="email"
                        placeholder="name@example.com"
                        required
                        maxLength={30}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        />
                        <label htmlFor="floatingInputCustom">Email</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3">
                        <Form.Control
                        id="floatingPasswordCustom"
                        type="text"
                        placeholder="Password"
                        required
                        autoComplete="off"
                        maxLength={30}
                        value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <label htmlFor="floatingPasswordCustom">Пароль</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3">
                        <Form.Control
                          id="floatingPhoneNumberCustom"
                          type="tel"
                          placeholder="+375292909202"
                          maxLength={13}
                          required
                          pattern="^\+375(33|29|44)\d{7}$" // Регулярное выражение для шаблона номера телефона
                          value={phoneNumber}
                          onChange={(event) => setPhoneNumber(event.target.value)}
                        />
                        <label htmlFor="floatingPhoneNumberCustom">Номер телефона</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3">
                        <Form.Control
                        id="floatingSurnameCustom"
                        type="text"
                        placeholder="Surname"
                        maxLength={30}
                        required
                        value={surname}
                        onChange={(event) => setSurname(event.target.value)}
                        />
                        <label htmlFor="floatingSurnameCustom">Фамилия</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3">
                        <Form.Control
                        id="floatingNameCustom"
                        type="text"
                        placeholder="Name"
                        maxLength={30}
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        />
                        <label htmlFor="floatingNameCustom">Имя</label>
                    </Form.Floating>
                    <Form.Group className="mb-3">
                        <Form.Label>Роль пользователя</Form.Label>
                        <Form.Select value={role} onChange={(event) => setRole(event.target.value)}>
                        <option value="ROLE_USER">Пользователь</option>
                        <option value="ROLE_ADMIN">Администратор</option>
                        <option value="ROLE_BUILDER">Строитель</option>
                        <option value="ROLE_FOREMAN">Бригадир</option>
                        </Form.Select>
                    </Form.Group>
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