import React, { useState } from 'react';
import { Container, Card, Form, Button, FloatingLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { WORK_ROUTE } from '../utils/consts';
import { addWork } from '../http/WorksApi';
import { unitWorkData } from '../utils/unitWorks';

export default function FormWork() {
    const [work, setWorks] = useState({
        name: "",
        cost: "",
        unit: unitWorkData[0].value,
    });
    const navigate = useNavigate()

    const handleCreateWork = async(event)=>{
        event.preventDefault();
        try{
           await addWork(work)
            navigate(WORK_ROUTE)
        }
        catch (error) {
            if (error.response && error.response.data) {
                alert(error.response.data);
            } else {
                console.error(error);
                alert("Произошла ошибка добавлении работы.");
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        setWorks((prevApplication) => ({
          ...prevApplication,
          [name]: value
        }));
      };

    return (
        <Container className='d-flex justify-content-center align-items-center' style ={{height: window.innerHeight - 54}}>
            <Card style={{width: 500}} className='p-5'>
                <h2 className='m-auto mb-3'>Создание работы</h2>
                <Form onSubmit={handleCreateWork}>
                    <Form.Floating className="mb-3">
                        <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        name = "name"
                        required
                        maxLength={30}
                        value={work.name}
                        onChange={handleChange}
                        />
                        <label htmlFor="floatingInputCustom">Название работы</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3">
                        <Form.Control
                        type="number"
                        name = "cost"
                        required
                        min={1}
                        max={100000}
                        maxLength={30}
                        value={work.cost}
                        onChange={handleChange}
                        />
                        <label htmlFor="floatingInputCustom">Стоимость</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3">
                        <FloatingLabel controlId="floatingUnitMaterialCustom" label="Единица измерения">
                            <Form.Select
                            name="unit"
                            value={work.unit}
                            onChange={handleChange}
                            >
                            {unitWorkData.map((unit) => (
                                <option key={unit.value} value={unit.value}>{unit.label}</option>
                            ))}
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Floating>

                    <div className="text-center">
                        <Button type="submit" className='mt-1'>
                            Создать
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    )
}