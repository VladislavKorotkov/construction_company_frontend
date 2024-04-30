import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import projectImage from "../img/project.png"
import Completed from './Completed';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const ProjectInfoCard = observer (({ project, onDownloadXlsx, onDownloadContract, onAddReview}) => {
  const {userApp} = useContext(Context)
  return (
    <Card className="w-100">
      <Card.Body className="text-center" style={{padding: '2rem'}}>
      <div style={{ width: '15rem', height: '15rem', margin: '0 auto' }}>
          <img src={projectImage} alt="Project" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
        <Card.Title className="text-center"><h2>{project.name}</h2></Card.Title>
        <Completed isCompleted={project.isCompleted}></Completed>
        <div className="d-flex justify-content-between">
          <Card.Text><strong>Начало:</strong> {project.startDate}</Card.Text>
          <Card.Text><strong>Конец:</strong> {project.endDate}</Card.Text>
        </div>

        <Card.Text> <strong>Адрес: </strong> {project.address.city+ ", " + project.address.street + ", " + project.address.numberHouse}</Card.Text>
        <Card.Text><strong>Ответственный:</strong> {project.builderName}</Card.Text>
        <Card.Text><strong>Общая стоимость:</strong> {project.cost} р.</Card.Text>

        <div className="d-flex justify-content-center">
          <Button variant="primary" className="mx-2" onClick={onDownloadXlsx}>Скачать смету</Button>
          <Button variant="primary" className="mx-2" onClick={onDownloadContract}>Скачать договор</Button>
          {project.isCompleted&&userApp.getRole()=="ROLE_USER"?<Button variant="success" className="mx-2" onClick={onAddReview}>Оставить отзыв</Button>:null}
          
        </div>

      </Card.Body>
    </Card>
  );
})
export default ProjectInfoCard;