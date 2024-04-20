import React, { useEffect, useState } from 'react';
import { Container, Card, Form, Button, FloatingLabel } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { getAvailableMaterials } from '../http/MaterialsApi';
import { addProjectMaterial, addProjectWork } from '../http/ProjectApi';
import { getAvailableWorks } from '../http/WorksApi';

export default function FormProjectWork() {
    const {id} = useParams()
    
    const [works, setWorks] = useState([
        {id:''}
    ]);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchWorks = async () => {
          try {
            const data = await getAvailableWorks();
            setWorks(data);
          } catch (error) {
            console.error('Ошибка при получении данных работ:', error);
          }
        };
        fetchWorks();
      }, []);
    
    const [data, setData] = useState({
        workId: works[0].id,
        quantity: ''
    });

    const handleAddWork = async(event)=>{
        event.preventDefault();
        try{
            await addProjectWork(id, data)
            navigate("/project/"+id)
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
    
        setData((prevApplication) => ({
          ...prevApplication,
          [name]: value
        }));
      };

    return (
        <Container className='d-flex justify-content-center align-items-center' style ={{height: window.innerHeight - 54}}>
            <Card style={{width: 500}} className='p-5'>
                <h2 className='m-auto mb-3'>Добавление работы</h2>
                <Form onSubmit={handleAddWork}>
                    <Form.Floating className="mb-3">
                        <FloatingLabel controlId="floatingUnitMaterialCustom" label="Работа">
                            <Form.Select
                            name="workId"
                            value={data.workId}
                            onChange={handleChange}
                            >
                            {works.map((work) => (
                                <option key={work.id} value={work.id}>{work.name}</option>
                            ))}
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Floating>
                    <Form.Floating className="mb-3">
                        <Form.Control
                        type="number"
                        name = "quantity"
                        required
                        min={1}
                        max={10000}
                        maxLength={30}
                        value={data.quantity}
                        onChange={handleChange}
                        />
                        <label htmlFor="floatingInputCustom">Количество</label>
                    </Form.Floating>
                    <div className="text-center">
                        <Button type="submit" className='mt-1'>
                            Добавить
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    )
}