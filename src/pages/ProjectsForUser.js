import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { getProjectsForUser } from '../http/ProjectApi';

export default function ProjectsForUser() {
    const [projects, setProject] = useState([]);
    useEffect(() => {
        const fetchProjects = async () => {
          try {
            const data = await getProjectsForUser();
            setProject(data);
          } catch (error) {
            console.error('Ошибка при получении данных проектов:', error);
          }
        };
        fetchProjects();
      }, []);
    return (
        <>
        <div className="app">
              <Layout>
                  <div className="d-flex justify-content-center" style={{ minHeight: '100vh' }}>
                      <div style={{ width: '90%', maxWidth:'100%'  }}>
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