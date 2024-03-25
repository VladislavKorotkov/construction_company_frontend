import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import {Card} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import ProjectInfoCard from '../components/ProjectInfoCard';
import TaskCard from '../components/TaskCard';
import { useParams } from 'react-router-dom';
import { getContract, getEstimateXlsx, getProject } from '../http/ProjectApi';
import { HOME_ROUTE } from '../utils/consts';
export default function Project() {
    const {id} = useParams()
    const [project, setProject] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        const fetchProjectData = async () => {
          try {
            const data = await getProject(id);
            setProject(data);
          } catch (error) {
          }
        };
        fetchProjectData();
      }, [id]);

      const handleDownloadXlsx = async () => {
        try {
          await getEstimateXlsx(id);
        } catch (error) {
          console.error('Ошибка скачивания:', error);
        }
      };

      const handleDownloadContract = async () => {
        try {
          await getContract(id);
        } catch (error) {
          console.error('Ошибка скачивания:', error);
        }
      };
    
    
    return (
        <>
        <div className="app">
              <Layout>
                  <div className="d-flex justify-content-center" style={{ minHeight: '100vh'}}>
                      <div style={{ width: '90%', maxWidth:'100%' }}>
                        {project && <ProjectInfoCard project={project} onDownloadXlsx={handleDownloadXlsx} onDownloadContract={handleDownloadContract}/>}
                        {project && <>
                            <h2>Задачи</h2>
                             {project.tasks.map((task) => (
                                <TaskCard key={task.id} task={(task) }  />
                            ))}
                        </>}
                        
                      </div>
                  </div>
              </Layout>
           </div>
        </>
    )
}