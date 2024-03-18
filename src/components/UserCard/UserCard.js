import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './UserCard.css';

const UserCard = ({ email, role, firstName, lastName, phoneNumber, handleLogout }) => {
  return (
    <Card className="user-card">
      <Card.Body className="d-flex flex-column align-items-center">
        <h2>Данные пользователя</h2>
        <Card.Text className="text-center">
          <strong>Email:</strong> {email}
        </Card.Text>
        <Card.Text className="text-center">
          <strong>Роль:</strong> {role}
        </Card.Text>
        <Card.Text className="text-center">
          <strong>Имя:</strong> {firstName}
        </Card.Text>
        <Card.Text className="text-center">
          <strong>Фамилия:</strong> {lastName}
        </Card.Text>
        <Card.Text className="text-center">
          <strong>Номер телефона:</strong> {phoneNumber}
        </Card.Text>
        <Button className="logout-button" onClick={handleLogout}>
          Выход
        </Button>
      </Card.Body>
    </Card>
  );
};

export default UserCard;