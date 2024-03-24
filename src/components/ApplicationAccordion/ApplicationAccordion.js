import React from 'react';
import { Accordion, Button, Col, Row } from 'react-bootstrap';
import { deleteApplication } from '../../http/ApplicationApi';
import { useNavigate } from 'react-router-dom';
import { APPLICATIONS_ROUTE } from '../../utils/consts';

const ApplicationAccordion = ({ application, onDelete}) => {
  const handleDelete = async() => {
    try {
      onDelete()
    } catch (error) {
      console.error('Ошибка при удалении заявки:', error);
    }
    
  };
  return (
    <Accordion.Item eventKey={application.id}>
    <Accordion.Header>{application.name}</Accordion.Header>
    <Accordion.Body>
        <Row>
            <Col>
            <h4>Адрес</h4>
            <p>
                <strong>Город:</strong> {application.address.city}
                <br />
                <strong>Улица:</strong> {application.address.street}
                <br />
                <strong>Дом:</strong> {application.address.numberHouse}
            </p>
            <h4>Описание</h4>
            <p>
             {application.description}
            </p>
            </Col>
        </Row>
        <Button variant="danger" onClick={handleDelete}>
          Удалить
        </Button>
    </Accordion.Body>
  </Accordion.Item>
  );
};

export default ApplicationAccordion;