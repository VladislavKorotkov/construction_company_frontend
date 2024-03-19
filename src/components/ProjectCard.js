import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Completed from './Completed';

const ProjectCard = ( {project} ) => {
  const projectUrl = `/project/${project.id}`;

  return (
    <Card className="mb-3">
    <Card.Body>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <Card.Title>{project.name}</Card.Title>
          <Card.Text>{project.dateOfCreation}</Card.Text>
        </div>
        <Completed isCompleted={project.isCompleted}></Completed>
      </div>
      <Link to={projectUrl} className="stretched-link"></Link>
    </Card.Body>
  </Card>
  );
};

export default ProjectCard;