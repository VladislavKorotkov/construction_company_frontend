import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import { Accordion, Button } from 'react-bootstrap';
import ApplicationAccordionForForeman from '../components/ApplicationAccordionForForeman';
import { acceptApplication, getApplicationsForForeman } from '../http/ApplicationApi';
import { useNavigate } from 'react-router-dom';
import { confirmTask, getTasks } from '../http/TasksApi';
import TaskForBuilder from '../components/TaskForBuilder';

export default function TasksBuilder() {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        const fetchTasks = async () => {
          try {
            const data = await getTasks();
            setTasks(data);
          } catch (error) {
            console.error('Ошибка при получении задач:', error);
          }
        };
    
        fetchTasks();
      }, []);

      const handleConfirm = async (taskId) => {
        try {
          const data = await confirmTask(taskId);
          setTasks(tasks.filter((item) => item.id !== taskId));
          alert(data)
        } catch (error) {
          console.error('Ошибка при изменении данных:', error);
        }
      };
    
    return (
        <>
        <div className="app">
              <Layout >
                  <div className="d-flex justify-content-center" style={{ minHeight: '100vh' }}>
                      <div style={{  width: '90%', maxWidth:'100%'  }}>
                        <h2>Задачи</h2>
                        <Accordion defaultActiveKey="0" flush>
                            {tasks.map((task) => (
                                <TaskForBuilder key={task.id} onConfirm={() => handleConfirm(task.id)} task={task}/>
                            ))}
                        </Accordion>
                      </div>
                  </div>
              </Layout>
           </div>
       </>
    )
}