import React from 'react';
import { Card } from 'react-bootstrap';
import Completed from './Completed';
import TaskStatus from './TaskStatus/TaskStatus';

const TaskCard = ( {task} ) => {
  return (
    <Card className="mb-3">
    <Card.Body>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <Card.Title><strong>{task.name}</strong></Card.Title>
          <Card.Text><strong>Сроитель: </strong>{task.builderName}</Card.Text>
        </div>
        <TaskStatus status={task.status}></TaskStatus>
      </div>
    </Card.Body>
  </Card>
  );
};

export default TaskCard;