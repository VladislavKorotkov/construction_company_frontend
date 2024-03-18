import React from 'react';
import { Container, Card, Form, Button, FloatingLabel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function FormApplication() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 54 }}>
      <Card style={{ width: 500 }} className="p-5">
        <h2 className="m-auto mb-3">Заполнение заявки</h2>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingNameCustom"
            type="text"
            placeholder="Name"
          />
          <label htmlFor="floatingNameCustom">Название заявки</label>
        </Form.Floating>
        <div className="address-block">
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingCityCustom"
              type="text"
              placeholder="City"
            />
            <label htmlFor="floatingCityCustom">Город</label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingStreetCustom"
              type="text"
              placeholder="Street"
            />
            <label htmlFor="floatingStreetCustom">Улица</label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingNumberHouseCustom"
              type="text"
              placeholder="NumberHouse"
            />
            <label htmlFor="floatingNameCustom">Номер дома</label>
          </Form.Floating>
        </div>
        <FloatingLabel controlId="floatingDescriptionCustom" label="Описание">
          <Form.Control
            as="textarea"
            placeholder="Description"
            style={{ height: '100px', resize: 'none' }}
          />
        </FloatingLabel>
        <Button type="submit" className="mt-3">
          Отправить
        </Button>
      </Card>
    </Container>
  );
}