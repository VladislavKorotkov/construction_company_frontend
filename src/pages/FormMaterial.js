import React, { useState } from 'react';
import { Container, Card, Form, Button, FloatingLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MATERIAL_ROUTE } from '../utils/consts';
import { addMaterial } from '../http/MaterialsApi';
import { unitMaterialData } from '../utils/unitMaterials';

export default function FormMaterial() {
    const [material, setMaterials] = useState({
        name: "",
        cost: "",
        unit: unitMaterialData[0].value,
    });
    const navigate = useNavigate()

    const handleCreateMaterial = async(event)=>{
        event.preventDefault();
        try{
           await addMaterial(material)
            navigate(MATERIAL_ROUTE)
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
    
        setMaterials((prevApplication) => ({
          ...prevApplication,
          [name]: value
        }));
      };

    return (
        <Container className='d-flex justify-content-center align-items-center' style ={{height: window.innerHeight - 54}}>
            <Card style={{width: 500}} className='p-5'>
                <h2 className='m-auto mb-3'>Создание материала</h2>
                <Form onSubmit={handleCreateMaterial}>
                    <Form.Floating className="mb-3">
                        <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        name = "name"
                        required
                        maxLength={30}
                        value={material.name}
                        onChange={handleChange}
                        />
                        <label htmlFor="floatingInputCustom">Название материала</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3">
                        <Form.Control
                       
                        type="number"
                        name = "cost"
                        required
                        min={1}
                        max={100000}
                        maxLength={30}
                        value={material.cost}
                        onChange={handleChange}
                        />
                        <label htmlFor="floatingInputCustom">Стоимость</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3">
                        <FloatingLabel controlId="floatingUnitMaterialCustom" label="Единица измерения">
                            <Form.Select
                            name="unit"
                            value={material.unit}
                            onChange={handleChange}
                            >
                            {unitMaterialData.map((unit) => (
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