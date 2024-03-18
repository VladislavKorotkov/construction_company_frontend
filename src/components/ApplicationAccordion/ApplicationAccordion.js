import React from 'react';
import { Accordion, Button, Col, Row } from 'react-bootstrap';

const ApplicationAccordion = ({ application }) => {
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
    </Accordion.Body>
  </Accordion.Item>
  );
};

export default ApplicationAccordion;