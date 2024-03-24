import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import { Accordion, Button } from 'react-bootstrap';
import ApplicationAccordionForForeman from '../components/ApplicationAccordionForForeman';
import { acceptApplication, getApplicationsForForeman } from '../http/ApplicationApi';
import { useNavigate } from 'react-router-dom';

export default function ApplicationsForForeman() {
    const [applications, setApplications] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        const fetchApplications = async () => {
          try {
            const data = await getApplicationsForForeman();
            setApplications(data);
          } catch (error) {
            console.error('Ошибка при получении данных заявок:', error);
          }
        };
    
        fetchApplications();
      }, []);

      const handleAccept = async (applicationId) => {
        try {
          const data = await acceptApplication(applicationId);
          setApplications(applications.filter((item) => item.id !== applicationId));
          alert(data)
        } catch (error) {
          console.error('Ошибка при принятии заявки:', error);
        }
      };
    
    return (
        <>
        <div className="app">
              <Layout >
                  <div className="d-flex justify-content-center" style={{ minHeight: '100vh' }}>
                      <div style={{  width: '90%', maxWidth:'100%'  }}>
                        <h2>Оставленные заявки</h2>
                        <Accordion defaultActiveKey="0" flush>
                            {applications.map((application) => (
                                <ApplicationAccordionForForeman key={application.id} application={(application)} onAccept={() => handleAccept(application.id)}/>
                            ))}
                        </Accordion>
                      </div>
                  </div>
              </Layout>
           </div>
       </>
    )
}