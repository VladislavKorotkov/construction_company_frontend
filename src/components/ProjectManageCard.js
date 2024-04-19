import React, { useContext, useEffect, useState } from 'react';
import { Card, Button, ToggleButtonGroup, ToggleButton, Table, ButtonGroup } from 'react-bootstrap';
import { deleteProjectMaterial, deleteProjectWork, finishProject, getProjectEstimate } from '../http/ProjectApi';
import { PROJECTS_ROUTE, PROJECT_ADD_MATERIAL_ROUTE } from '../utils/consts';
import { Link, useNavigate } from 'react-router-dom';

const ProjectManageCard = ({ projectId }) => {
  const [selectedOption, setSelectedOption] = useState('works'); // works - для отображения списка работ, materials - для отображения списка материалов
  const [estimate, setEstimate] = useState({
    materials: [],
    works: []
  })
  const addMaterialUrl = `/project/${projectId}/addmaterial`;
  const addWorkUrl = `/project/${projectId}/addwork`;

  const navigate = useNavigate()

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

  const handleDeleteMaterial = async (materialId) => {
    try {
      const data = await deleteProjectMaterial(projectId, materialId);
      alert(data)
      setEstimate(prevState => {
        const updatedEstimate = { ...prevState };
        updatedEstimate.materials = updatedEstimate.materials.filter(material => material.materialProjectId !== materialId);
        return updatedEstimate;
      });

    } catch (error) {
      alert('Ошибка при удалении материала');
    }
  };

  const handleDeleteWork = async (workId) => {
    try {
      const data = await deleteProjectWork(projectId, workId);
      alert(data)
      setEstimate(prevState => {
        const updatedEstimate = { ...prevState };
        updatedEstimate.works = updatedEstimate.works.filter(work => work.workProjectId !== workId);
        return updatedEstimate;
      });

    } catch (error) {
      alert('Ошибка при удалении работы');
    }
  };

  
  const handleCreateContract = async () => {
    navigate('/project/'+projectId+'/addcontract')
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
            <Button variant="danger" className="ms-2" onClick={() => handleDeleteWork(work.workProjectId)}>
                Удалить
              </Button>
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
            <Button variant="danger" className="ms-2" onClick={() => handleDeleteMaterial(material.materialProjectId)}>
                Удалить
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
       
      );
    }
  };


  
  const handleFinishProject = async () => {
    try {
      const data = await finishProject(projectId);
      alert(data)
      navigate(PROJECTS_ROUTE)
    } catch (error) {
      alert("Ошибка завершение проекта");
    }
  };

  return (
    <Card className="w-100">
      <Card.Body className="text-center" style={{ padding: '2rem' }}>
        <h3>Управление проектом</h3>
        <div>
          <ButtonGroup className="mt-3">
            <Button variant="primary" onClick={handleFinishProject}>Завершение проекта</Button>
            <Button variant="primary" onClick={handleCreateContract}>Создание договора</Button>
          </ButtonGroup>
        </div>

        <div className="mt-3">
  <ButtonGroup className="mr-2">
    <Link to={addMaterialUrl}>
      <Button variant="primary">Добавить материал</Button>
    </Link>
  </ButtonGroup>
  <ButtonGroup>
    <Link to={addWorkUrl}>
      <Button variant="primary">Добавить работу</Button>
    </Link>
  </ButtonGroup>
</div>
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