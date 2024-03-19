import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

const ProjectManagementButtons = () => {
  return (
    <ButtonToolbar className="d-flex w-100">
      <Button variant="primary" className="flex-fill">Управление сметой</Button>
      <Button variant="primary" className="flex-fill">Добавление задач</Button>
      <Button variant="primary" className="flex-fill">Составление договора</Button>
      <Button variant="danger" className="flex-fill">Завершить проект</Button>
    </ButtonToolbar>
  );
};

export default ProjectManagementButtons;