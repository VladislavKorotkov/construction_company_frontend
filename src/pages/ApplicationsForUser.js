import React from 'react';
import Layout from '../components/Layout/Layout';
import { Accordion, Button } from 'react-bootstrap';
import ApplicationAccordion from '../components/ApplicationAccordion/ApplicationAccordion';

export default function ApplicationsForUser() {
    const applications = [
        {
            id: 1,
            name: "Ремонт квартиры",
            address: {
                city: "Минск",
                street: "Якуба Коласа",
                numberHouse: "13a"
            },
            description: "Речь идет о LЁN. С сегодняшнего дня здесь будет действовать laptop-free-формат: посетителей просят не пользоваться планшетами и ноутбуками."
        },
        {
            id: 2,
            name: "Ремонт дома",
            address: {
                city: "Минск",
                street: "Якуба Коласа",
                numberHouse: "13a"
            },
            description: "Речь идет о LЁN. С сегодняшнего дня здесь будет действовать laptop-free-формат: посетителей просят не пользоваться планшетами и ноутбуками."
        },
        {
            id: 3,
            name: "Ремонт санузла",
            address: {
                city: "Минск",
                street: "Якуба Коласа",
                numberHouse: "13a"
            },
            description: "Речь идет о LЁN. С сегодняшнего дня здесь будет действовать laptop-free-формат: посетителей просят не пользоваться планшетами и ноутбуками."
        },
        {
            id: 4,
            name: "Ремонт кухни",
            address: {
                city: "Минск",
                street: "Якуба Коласа",
                numberHouse: "13a"
            },
            description: "Речь идет о LЁN. С сегодняшнего дня здесь будет действовать laptop-free-формат: посетителей просят не пользоваться планшетами и ноутбуками."
        },
       
    ]
    return (
        <>
        <div className="app">
              <Layout role="user">
                  <div className="d-flex justify-content-center" style={{ minHeight: '100vh' }}>
                      <div style={{  width: '90%', maxWidth:'100%'  }}>
                        <h2>Оставленные заявки</h2>
                        <Button href="/application/add" className="my-3">Оставить новую заявку</Button>
                        <Accordion defaultActiveKey="0" flush>
                            {applications.map((application) => (
                                <ApplicationAccordion key={application.id} application={(application)}/>
                            ))}
                        </Accordion>
                      </div>
                  </div>
              </Layout>
           </div>
       </>
    )
}