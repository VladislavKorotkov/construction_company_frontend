import React from 'react';
import './TaskStatus.css'; // Подключение файла стилей

const TaskStatus = ({ status }) => {
  let statusClassName = '';

  switch (status) {
    case 'Ожидание':
      statusClassName = 'task-waiting';
      break;
    case 'В процессе':
      statusClassName = 'task-in-progress';
      break;
    case 'Завершено':
      statusClassName = 'task-completed';
      break;
    default:
      statusClassName = 'task-default';
  }

  return (
    <div className={statusClassName}>
      {status}
    </div>
  );
};

export default TaskStatus;