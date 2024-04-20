import React from 'react';
import { Accordion, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TaskForBuilder = ({ task, onConfirm }) => {
  const handleConfirm = () => {
    try {
      onConfirm();
    } catch (error) {
      console.error('Ошибка при принятии заявки:', error);
    }
  };

  return (
    <Accordion.Item eventKey={task.id}>
      <Accordion.Header>
        <h5>{task.name}</h5>
      </Accordion.Header>
      <Accordion.Body>
        <Row>
          <Col>
            <p>
              <strong>Ссылка на проект:</strong>{' '}
              <Link to={'/project/' + task.projectId}>Перейти к проекту</Link>
            </p>
            <p>
              <strong>Статус:</strong> {task.status}
            </p>
            <p>
              <strong>Описание:</strong> {task.description}
            </p>
          </Col>
        </Row>
        <Button variant="success" onClick={handleConfirm}>
          Выполнить задачу
        </Button>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default TaskForBuilder;