import React, { useEffect, useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { AUTH_ROUTE, REGISTER_ROUTE, SPECIALITIES_ROUTE } from '../utils/consts';
import { registration } from '../http/userApi';
import { addSpeciality } from '../http/SpecialitiesApi';
import { getBuilders } from '../http/BuildersApi';
import { getAvailableWorks } from '../http/ProjectApi';
import { createTask } from '../http/TasksApi';

export default function FormAddTask() {
    const { id } = useParams();
    const [builders, setBuilders] = useState([]);
    const [works, setWorks] = useState([]);
    const [taskData, setTaskData] = useState({
        workProjectId: '',
        builderId: '',
        description: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBuilders = async () => {
            try {
                const data = await getBuilders();
                setBuilders(data)
            } catch (error) {}
        };
        fetchBuilders();
    }, []);

    useEffect(() => {
        const fetchWorks = async () => {
            try {
                const data = await getAvailableWorks(id);
                setWorks(data);
            } catch (error) {}
        };
        fetchWorks();
    }, []);

    const handleCreateTask = async (event) => {
        event.preventDefault();
        try {
            const data = await createTask(id, taskData)
            alert("Задача добавлена")
            navigate('/project/' + id);
        } catch (error) {
            if (error.response && error.response.data) {
                alert(error.response.data);
            } else {
                console.error(error);
                alert('Произошла ошибка при добавлении задачи.');
            }
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTaskData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 54 }}>
            <Card style={{ width: 500 }} className="p-5">
                <h2 className="m-auto mb-3">Создание задачи</h2>
                <Form onSubmit={handleCreateTask}>
                    <Form.Group controlId="workProjectId">
                        <Form.Label>Работа</Form.Label>
                        <Form.Control as="select" name="workProjectId" value={taskData.workProjectId} onChange={handleInputChange} required>
                            <option value="">Выберите работу</option>
                            {works.map((work) => (
                                <option key={work.workProjectId} value={work.workProjectId}>
                                    {work.workName}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="builderId">
                        <Form.Label>Строитель</Form.Label>
                        <Form.Control as="select" name="builderId" value={taskData.builderId} onChange={handleInputChange} required>
                            <option value="">Выберите строителя</option>
                            {builders.map((builder) => (
                                <option key={builder.id} value={builder.id}>
                                    {builder.user.name + " " + builder.user.surname}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Описание задачи</Form.Label>
                        <Form.Control as="textarea" rows={3} name="description" value={taskData.description} onChange={handleInputChange} required />
                    </Form.Group>
                    <div className="text-center">
                        <Button type="submit" className="mt-1">
                            Создать
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
}