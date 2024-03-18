import React from 'react';
import Layout from '../components/Layout/Layout';
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsForUser() {
    const projects = [
        {
            id: 1,
            name: "Ремонт квартиры",
            dateOfCreation: "12.02.2023",
            isCompleted: false
        },
        {
            id: 2,
            name: "Ремонт квартиры",
            dateOfCreation: "12.02.2023",
            isCompleted: false
        },
        {
            id: 3,
            name: "Ремонт дома",
            dateOfCreation: "12.02.2023",
            isCompleted: true
        }
    ]
    return (
        <>
        <div className="app">
              <Layout role="user">
                  <div className="d-flex justify-content-center" style={{ minHeight: '100vh' }}>
                      <div style={{ width: '100%', maxWidth: '600px' }}>
                        <h2>Проекты</h2>
                        {projects.map((project) => (
                                <ProjectCard key={project.id} project={(project)}/>
                            ))}
                      </div>
                  </div>
              </Layout>
           </div>
       </>
    )
}