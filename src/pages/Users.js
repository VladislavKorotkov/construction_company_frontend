import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import {Button} from 'react-bootstrap'
import UsersTable from '../components/UsersTable/UsersTable';
import { getUsers } from '../http/userApi';


const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const data = await getUsers();
            setUsers(data);
          } catch (error) {
            console.error('Ошибка при получении данных пользователей:', error);
          }
        };
        fetchUsers();
      }, []);

      const handleDelete = async (applicationId) => {
        try {
          //const data = await deleteApplication(applicationId);
          //setApplications(applications.filter((item) => item.id !== applicationId));
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
                    <div style={{  width: '90%', maxWidth:'100%' }}>
                    <h2>Аккаунты</h2>
                    <Button href="/application/add" className="my-3">Добавить новый аккаунт</Button>
                        <UsersTable users={users}></UsersTable>
                    </div>
                </div>
            </Layout>
         </div>
     </>
 
  );
};

export default Users;