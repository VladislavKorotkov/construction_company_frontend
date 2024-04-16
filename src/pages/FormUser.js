import React, { useEffect, useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { USERS_ROUTE } from '../utils/consts';
import { rolesData } from '../utils/roles';
import { getSpecialities } from '../http/SpecialitiesApi';
import { createAccount } from '../http/userApi';

export default function FormUser() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('ROLE_USER');
    const [speciality, setSpeciality] = useState('');
    const navigate = useNavigate()
    const [specialities, setSpecialities] = useState([])

    useEffect(() => {
        const fetchSpecialities = async () => {
          try {
            const data = await getSpecialities();
            setSpecialities(data);
            if (data.length > 0) {
                setSpeciality(data[0].id);
              }
          } catch (error) {
            console.error('Ошибка при получении данных специальностей:', error);
          }
        };
        fetchSpecialities();
      }, []);


    const handleRegister = async(event)=>{
        event.preventDefault();
        try{
            await createAccount(email, password, name, surname, phoneNumber, role, speciality)
            navigate(USERS_ROUTE)
        }
        catch (error) {
            if (error.response && error.response.data) {
                alert(error.response.data);
            } else {
                console.error(error);
                alert("Произошла ошибка при создании аккаунта.");
            }
        }
    }
    return (
        <>
            <div className="app">
                <Container className='d-flex justify-content-center align-items-center'>
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
                                <Form.Label>Роль</Form.Label>
                                <Form.Select value={role} onChange={(event) => setRole(event.target.value)}>
                                {rolesData.map((role) => (
                                        <option key={role.value} value={role.value}>{role.label}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            {role === 'ROLE_BUILDER' && (
                                <Form.Group className="mb-3">
                                    <Form.Label>Специальность</Form.Label>
                                    <Form.Select value={speciality} onChange={(event) => setSpeciality(event.target.value)}>
                                        {specialities.map((spec) => (
                                            <option key={spec.id} value={spec.id}>{spec.name}</option>
                                        ))} 
                                    </Form.Select>
                                </Form.Group>
                            )}
                            
                            <div className="text-center">
                                <Button type="submit" className='mt-1'>
                                    Создать
                                </Button>
                            </div>
                        </Form>
                    </Card>
                </Container>
            </div>
        </>
    )
}