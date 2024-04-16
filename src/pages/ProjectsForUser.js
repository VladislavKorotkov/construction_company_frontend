import React, { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { getProjectsForAdmin, getProjectsForForeman, getProjectsForUser } from '../http/ProjectApi';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
const ProjectsForUser =observer(()=> {
    const [projects, setProject] = useState([]);
    const {userApp} = useContext(Context)

    useEffect(() => {
        const fetchProjects = async () => {
          var data;
          try {
            switch(userApp.getRole()){
              case "ROLE_USER":
                {
                  data = await getProjectsForUser();
                  break;
                }
              case "ROLE_ADMIN":
                {
                  data = await getProjectsForAdmin()
                  break;
                }
                case "ROLE_FOREMAN":
                {
                  data = await getProjectsForForeman();
                  break;
                }
            }
           
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
})

export default ProjectsForUser;