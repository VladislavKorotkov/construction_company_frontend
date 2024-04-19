import React, { useContext, useEffect, useState } from 'react';
import { Card, Button, ToggleButtonGroup, ToggleButton, Table, ButtonGroup } from 'react-bootstrap';
import { deleteProjectMaterial, deleteProjectWork, finishProject, getProjectEstimate } from '../http/ProjectApi';
import { PROJECTS_ROUTE, PROJECT_ADD_MATERIAL_ROUTE } from '../utils/consts';
import { Link, useNavigate } from 'react-router-dom';
import { deleteTask } from '../http/TasksApi';

const TaskManageCard = ({ projectId, project, setProject }) => {
  const navigate = useNavigate();

  const handleDeleteTask = async (taskId) => {
    try {
      const data = await deleteTask(projectId, taskId);
      alert(data);

      // Обновление состояния проекта после успешного удаления задачи
      const updatedTasks = project.tasks.filter((task) => task.id !== taskId);
      setProject((prevProject) => ({
        ...prevProject,
        tasks: updatedTasks,
      }));
    } catch (error) {
      alert('Ошибка при удалении задачи');
    }
  };

  const handleCreateTask = async () => {
    navigate('/project/' + projectId + '/addtask');
  };

  return (
    <Card className="w-100">
      <Card.Body className="text-center" style={{ padding: '2rem' }}>
        <h3>Управление задачами</h3>
        <Button variant="primary" onClick={handleCreateTask}>
          Создание задачи
        </Button>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Название</th>
              <th>Имя строителя</th>
              <th>Описание</th>
              <th>Статус</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {project.tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.name}</td>
                <td>{task.builderName}</td>
                <td>{task.description}</td>
                <td>{task.status}</td>
                <td>
                  <Button variant="danger" className="ms-2" onClick={() => handleDeleteTask(task.id)}>
                    Удалить
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default TaskManageCard;