import React, { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import {Card} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import ProjectInfoCard from '../components/ProjectInfoCard';
import TaskCard from '../components/TaskCard';
import { useParams } from 'react-router-dom';
import { getContract, getEstimateXlsx, getProject } from '../http/ProjectApi';
import { HOME_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import ProjectManageCard from '../components/ProjectManageCard';
import TaskManageCard from '../components/TasksManageCard';

const Project = observer(()=>{
  const navigate = useNavigate()
    const {id} = useParams()
    const [project, setProject] = useState({
      id: null,
      isCompleted: false,
      tasks: []
    })
    const {userApp} = useContext(Context)
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

      
      const handleAddReview = async () => {
        navigate("/project/"+id+"/addreview")
      };
    
    
    return (
        <>
        <div className="app">
              <Layout>
                  <div className="d-flex justify-content-center" style={{ minHeight: '100vh'}}>
                      <div style={{ width: '90%', maxWidth:'100%' }}>
                        {project.id && <ProjectInfoCard project={project} onDownloadXlsx={handleDownloadXlsx} onDownloadContract={handleDownloadContract} onAddReview={handleAddReview}/>}
                        {userApp.getRole()==="ROLE_FOREMAN" && project.isCompleted==false?
                        <>
                        <ProjectManageCard projectId={id}></ProjectManageCard>
                        <TaskManageCard projectId={id} project={project} setProject={setProject}></TaskManageCard>
                        </>:
                          project.id && project.tasks.length!=0 &&<>
                            <h2>Задачи</h2>
                            {project.tasks.map((task) => (
                                <TaskCard key={task.id} task={(task) }  />
                            ))}
                        </>
                        }
                        
                        
                      </div>
                  </div>
              </Layout>
           </div>
        </>
    )
})

export default Project;