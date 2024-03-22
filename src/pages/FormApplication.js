import React, { useState } from 'react';
import { Container, Card, Form, Button, FloatingLabel } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { postApplication } from '../http/ApplicationApi';
import { APPLICATIONS_ROUTE } from '../utils/consts';

export default function FormApplication() {
  const navigate = useNavigate()
  const [application, setApplication] = useState({
    name: '',
    address: {
      street: '',
      city: '',
      numberHouse: ''
    },
    description: ''
  });
  const handleCreateApplication = async(event)=>{
    event.preventDefault();
    try{
        const data = await postApplication(application)
        navigate(APPLICATIONS_ROUTE)
    }
    catch (error) {
        if (error.response && error.response.data) {
            alert(error.response.data);
        } else {
            console.error(error);
            alert("Произошла ошибка создания");
        }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setApplication((prevApplication) => ({
      ...prevApplication,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;

    setApplication((prevApplication) => ({
      ...prevApplication,
      address: {
        ...prevApplication.address,
        [name]: value
      }
    }));
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 54 }}>
      <Card style={{ width: 500}} className="p-5 card">
        <h2 className="m-auto mb-3">Заполнение заявки</h2>
        <Form onSubmit={handleCreateApplication}>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingNameCustom"
              type="text"
              placeholder="Name"
              required
              name = "name"
              value={application.name} 
              onChange={handleChange}
            />
            <label htmlFor="floatingNameCustom">Название заявки</label>
          </Form.Floating>
          <div className="address-block">
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingCityCustom"
                type="text"
                placeholder="City"
                name = "city"
                required
                value={application.address.city}
                 onChange={handleAddressChange}
              />
              <label htmlFor="floatingCityCustom">Город</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingStreetCustom"
                type="text"
                placeholder="Street"
                name = "street"
                required
                value={application.address.street}
                 onChange={handleAddressChange}
              />
              <label htmlFor="floatingStreetCustom">Улица</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingNumberHouseCustom"
                type="text"
                placeholder="NumberHouse"
                required
                name = "numberHouse"
                value={application.address.numberHouse}
                 onChange={handleAddressChange}
              />
              <label htmlFor="floatingNameCustom">Номер дома</label>
            </Form.Floating>
            </div>
            <FloatingLabel controlId="floatingDescriptionCustom" label="Описание">
              <Form.Control
                as="textarea"
                placeholder="Description"
                style={{ height: '100px', resize: 'none' }}
                required
                name = "description"
                value={application.description} 
                onChange={handleChange}
              />
            </FloatingLabel>
            <Button type="submit" className="mt-3">
              Отправить
            </Button>
        </Form>
      </Card>
    </Container>
  );
}