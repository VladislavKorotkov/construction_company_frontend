import React, { useEffect, useState } from 'react';
import { Container, Card, Form, Button, FloatingLabel } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { getAvailableMaterials } from '../http/MaterialsApi';
import { addProjectMaterial, createContract } from '../http/ProjectApi';

export default function FormCreateContract() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState({
        startDate: '',
        endDate: ''
    });

    const handleAddContract = async (event) => {
        event.preventDefault();
        try {
            console.log(data)
            await createContract(id, data);
            navigate("/project/" + id);
        } catch (error) {
            if (error.response && error.response.data) {
                alert(error.response.data);
            } else {
                console.error(error);
                alert("Произошла ошибка при создании договора.");
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevApplication) => ({
            ...prevApplication,
            [name]: value
        }));
    };

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 500 }} className="p-5">
                <h2 className="m-auto mb-3">Создание договора</h2>
                <Form onSubmit={handleAddContract}>
                    <Form.Group controlId="startDate">
                        <Form.Label>Начальная дата проекта</Form.Label>
                        <Form.Control
                            type="date"
                            name="startDate"
                            value={data.startDate}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="endDate">
                        <Form.Label>Конечная дата проекта</Form.Label>
                        <Form.Control
                            type="date"
                            name="endDate"
                            value={data.endDate}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <div className="text-center">
                        <Button type="submit" className="mt-1">
                            Добавить
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
}