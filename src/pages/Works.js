import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import {Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { WORK_FORM_ROUTE } from '../utils/consts';
import { deleteWork, getWorks } from '../http/WorksApi';
import WorksTable from '../components/WorksTable';


const Works = () => {
    const [works, setWorks] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const fetchWorks = async () => {
          try {
            const data = await getWorks();
            setWorks(data);
          } catch (error) {
            console.error('Ошибка при получении данных работ:', error);
          }
        };
        fetchWorks();
      }, []);

      const handleCreateWork=()=>{
        navigate(WORK_FORM_ROUTE)
      }

      const handleDelete = async (workId) => {
        try {
          const data = await deleteWork(workId);
          setWorks(works.filter((item) => item.id !== workId));
          alert(data)
        } catch (error) {
          alert('Ошибка при удалении работы');
        }
      };



      const handleUpdate = async (userId) => {
    //     try {
    //       const {data} = await blockUser(userId)
    //       setUsers(prevUsers =>
    //         prevUsers.map(user => {
    //           if (user.id === userId) {
    //             return {
    //               ...user,
    //               isBlocked: !user.isBlocked
    //             };
    //           }
    //           return user;
    //   })
    // );
    //     } catch (error) {
    //       alert(error.response.data)
    //     }
      };

  return (
    <>
      <div className="app">
            <Layout>
                <div className="d-flex justify-content-center" style={{ minHeight: '100vh' }}>
                    <div style={{  width: '90%', maxWidth:'100%' }}>
                    <h2>Работы</h2>
                    <Button onClick={handleCreateWork} className="my-3">Добавить новую работу</Button>
                        <WorksTable works={works} setWorks={setWorks} onUpdate={handleUpdate} onDelete={handleDelete}></WorksTable>
                    </div>
                </div>
            </Layout>
         </div>
     </>
 
  );
};

export default Works;