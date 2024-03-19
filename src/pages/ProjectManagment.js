import React from 'react';
import Layout from '../components/Layout/Layout';
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ProjectInfoCard from '../components/ProjectInfoCard';
import TaskCard from '../components/TaskCard';
import ProjectManagementButtons from '../components/ProjectManagmentButtons';

export default function ProjectManagment() {
    const project =
        {
            name:"Ремонт квартиры",
            startDate: "12.12.2023",
            endDate: "13.12.2023",
            address: {
                city: "Минск",
                street: "Якуба Коласа",
                numberHouse: "12a",
            },
            description: "Речь идет о LЁN. С сегодняшнего дня здесь будет действовать laptop-free-формат: посетителей просят не пользоваться планшетами и ноутбуками.",
            builderName: "Вовка Вовкин",
            isCompleted: true,
            cost: 123,
            tasks:[
                {
                    id: 1,
                    name: "Укладка плитки",
                    builderName: "Вовчан Вовкин",
                    status: "Ожидание"
                },
                {
                    id: 2,
                    name: "Укладка проводки",
                    builderName: "Вовчан Вовкин",
                    status: "В процессе"
                },
                {
                    id: 3,
                    name: "Укладка плитки",
                    builderName: "Вовчан Вовкин",
                    status: "Завершено"
                },
                {
                    id: 4,
                    name: "Укладка плитки",
                    builderName: "Вовчан Вовкин",
                    status: "Ожидание"
                }
            ]

        }
    return (
        <>
        <div className="app">
              <Layout role="user">
                  <div className="d-flex justify-content-center" style={{ minHeight: '100vh'}}>
                      <div style={{ width: '90%', maxWidth:'100%' }}>
                        <ProjectInfoCard project={project} flag={false}/>
                        <ProjectManagementButtons></ProjectManagementButtons>
                      </div>
                  </div>
              </Layout>
           </div>
       </>
    )
}