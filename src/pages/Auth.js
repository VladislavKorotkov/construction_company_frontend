import React, { useContext, useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { PROFILE_ROUTE, REGISTER_ROUTE } from '../utils/consts';
import { login } from '../http/userApi';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Auth= observer (() =>{
    const location = useLocation()
    const navigate = useNavigate()
    const {userApp} = useContext(Context)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const signIn  = async() => {
        try{
            const data = await login(username, password)
            userApp.setIsAuth(true)
            userApp.setUser(data)
            userApp.setRole(data.role)
            navigate(PROFILE_ROUTE)
        }
        catch(e){
            alert("Неверный логин или пароль")
        }
    }
    return (
        <Container className='d-flex justify-content-center align-items-center' style ={{height: window.innerHeight - 54}}>
            <Card style={{width: 500}} className='p-5'>
                <h2 className='m-auto mb-3'>Авторизация</h2>
                <Form.Floating className="mb-3">
                    <Form.Control
                    id="floatingInputCustom"
                    type="email"
                    placeholder="name@example.com"
                    value={username}
                    onChange={e=>setUsername(e.target.value)}
                    
                    />
                    <label htmlFor="floatingInputCustom">Email</label>
                </Form.Floating>
                <Form.Floating>
                    <Form.Control
                    id="floatingPasswordCustom"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">Пароль</label>
                </Form.Floating>
                <Button type="submit" className='mt-3' onClick={signIn}>Войти</Button>
                <NavLink to={REGISTER_ROUTE} className='mt-3 m-auto'>Зарегистрироваться</NavLink>
            </Card>
        </Container>
    )
}) 

export default Auth;