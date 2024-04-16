import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import './PasswordChaneForm.css'

const PasswordChangeForm = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setOldPassword("")
    setNewPassword("")
    //TODO
  };

  return (
    <Card className="text-center p-4 card">
      <h2>Изменение пароля</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="oldPassword">
          <Form.Label>Старый пароль:</Form.Label>
          <Form.Control
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="newPassword">
          <Form.Label>Новый пароль:</Form.Label>
          <Form.Control
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" className="but">Изменить пароль</Button>
      </Form>
    </Card>
  );
};

export default PasswordChangeForm;