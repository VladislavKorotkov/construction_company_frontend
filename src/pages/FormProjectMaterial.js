import React, { useEffect, useState } from 'react';
import { Container, Card, Form, Button, FloatingLabel } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { getAvailableMaterials } from '../http/MaterialsApi';
import { addProjectMaterial } from '../http/ProjectApi';

export default function FormProjectMaterial() {
    const {id} = useParams()
    
    const [materials, setMaterials] = useState([
        {id:''}
    ]);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchMaterials = async () => {
          try {
            const data = await getAvailableMaterials();
            setMaterials(data);
          } catch (error) {
            console.error('Ошибка при получении данных материалов:', error);
          }
        };
        fetchMaterials();
      }, []);
    
    const [data, setData] = useState({
        materialId: materials[0].id,
        quantity: ''
    });

    const handleAddMaterial = async(event)=>{
        event.preventDefault();
        try{
            await addProjectMaterial(id, data)
            navigate("/project/"+id)
        }
        catch (error) {
            if (error.response && error.response.data) {
                alert(error.response.data);
            } else {
                console.error(error);
                alert("Произошла ошибка добавлении материала.");
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
                <h2 className='m-auto mb-3'>Добавление материала</h2>
                <Form onSubmit={handleAddMaterial}>
                    <Form.Floating className="mb-3">
                        <FloatingLabel controlId="floatingUnitMaterialCustom" label="Материал">
                            <Form.Select
                            name="materialId"
                            value={data.materialId}
                            onChange={handleChange}
                            >
                            {materials.map((material) => (
                                <option key={material.id} value={material.id}>{material.name}</option>
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