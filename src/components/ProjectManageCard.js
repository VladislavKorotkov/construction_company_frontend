import React, { useContext, useEffect, useState } from 'react';
import { Card, Button, ToggleButtonGroup, ToggleButton, Table, ButtonGroup } from 'react-bootstrap';
import { getProjectEstimate } from '../http/ProjectApi';

const ProjectManageCard = ({ projectId }) => {
  const [selectedOption, setSelectedOption] = useState('works'); // works - для отображения списка работ, materials - для отображения списка материалов
  const [estimate, setEstimate] = useState({
    materials: [],
    works: []
  })
  useEffect(() => {
    const fetchEstimate = async () => {
      try {
        const data = await getProjectEstimate(projectId);
        setEstimate(data);
      } catch (error) {
        console.error('Ошибка при получении данных проекта:', error);
      }
    };
    fetchEstimate();
  }, []);


  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

 
  const renderTable = () => {
    if (selectedOption === 'works') {
      return (
        <tbody>
        {estimate.works.map((work) => (
          <tr key={work.workProjectId}>
            <td>{work.workId}</td>
            <td>{work.workName}</td>
            <td>{work.cost}</td>
            <td>{work.quantity}</td>
            <td>{work.totalCost}</td>
            <td>
              {/* <Button variant="warning" onClick={() => onUpdate(material.id)}>
                Изменить
              </Button>
              <Button variant="danger" className="ms-2" onClick={() => onDelete(material.id)}>
                Удалить
              </Button> */}
            </td>
          </tr>
        ))}
      </tbody>
      );
    } else if (selectedOption === 'materials') {
      return (
        <tbody>
        {estimate.materials.map((material) => (
          <tr key={material.materialProjectId}>
            <td>{material.materialId}</td>
            <td>{material.materialName}</td>
            <td>{material.cost}</td>
            <td>{material.quantity}</td>
            <td>{material.totalCost}</td>
            <td>
              {/* <Button variant="warning" onClick={() => onUpdate(material.id)}>
                Изменить
              </Button>
              <Button variant="danger" className="ms-2" onClick={() => onDelete(material.id)}>
                Удалить
              </Button> */}
            </td>
          </tr>
        ))}
      </tbody>
       
      );
    }
  };


  return (
    <Card className="w-100">
      <Card.Body className="text-center" style={{ padding: '2rem' }}>
        <h3>Управление проектом</h3>
        <ButtonGroup className="mt-3">
          <Button variant="primary">Завершение проекта</Button>
          <Button variant="primary">Создание договора</Button>
        </ButtonGroup>
        <div className="mt-4">
          <ToggleButtonGroup
            type="radio"
            name="options"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <ToggleButton value="works" variant="outline-primary" id="tbg-radio-1">
              Список работ
            </ToggleButton>
            <ToggleButton value="materials" variant="outline-primary" id="tbg-radio-2">
              Список материалов
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <Table>
          <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Стоимость</th>
            <th>Количество</th>
            <th>Общая стоимость</th>
            <th>Действие</th>
          </tr>
        </thead>
        {renderTable()}
        </Table>
      </Card.Body>
    </Card>
  );
};

export default ProjectManageCard;