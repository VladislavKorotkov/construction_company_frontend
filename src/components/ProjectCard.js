import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
        <div>
          {project.isCompleted ? (
            <span className="text-success">Завершено</span>
          ) : (
            <span className="text-warning">В процессе</span>
          )}
        </div>
      </div>
      <Link to={projectUrl} className="stretched-link"></Link>
    </Card.Body>
  </Card>
  );
};

export default ProjectCard;