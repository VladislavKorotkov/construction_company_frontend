import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import { Accordion, Button } from 'react-bootstrap';
import ApplicationAccordion from '../components/ApplicationAccordion/ApplicationAccordion';
import { useNavigate } from 'react-router-dom';
import { APPLICATION_FORM_ROUTE } from '../utils/consts';
import { deleteApplication, getApplicationsForForeman, getApplicationsForUser } from '../http/ApplicationApi';

export default function ApplicationsForUser() {
    const [applications, setApplications] = useState([]);
    useEffect(() => {
        const fetchApplications = async () => {
          try {
            const data = await getApplicationsForUser();
            setApplications(data);
          } catch (error) {
            console.error('Ошибка при получении данных заявок:', error);
          }
        };
        fetchApplications();
      }, []);
    
    const navigate = useNavigate()
    const handleCreateApp=()=>{
        navigate(APPLICATION_FORM_ROUTE)
    }

    const handleDelete = async (applicationId) => {
      try {
        const data = await deleteApplication(applicationId);
        setApplications(applications.filter((item) => item.id !== applicationId));
        alert(data)
      } catch (error) {
        console.error('Ошибка при удалении заявки:', error);
      }
    };
    return (
        <>
        <div className="app">
          <Layout>
            <div className="d-flex justify-content-center" style={{ minHeight: '100vh' }}>
              <div style={{ width: '90%', maxWidth: '100%' }}>
                <h2>Оставленные заявки</h2>
                <Button onClick={handleCreateApp} className="my-3">
                  Оставить новую заявку
                </Button>
                <Accordion defaultActiveKey="0" flush>
                  {applications.map((application) => (
                    <ApplicationAccordion key={application.id} application={application} onDelete={() => handleDelete(application.id)} />
                  ))}
                </Accordion>
              </div>
            </div>
          </Layout>
        </div>
      </>
    )
}