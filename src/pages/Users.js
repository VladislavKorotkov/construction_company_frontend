import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import {Button} from 'react-bootstrap'
import UsersTable from '../components/UsersTable/UsersTable';
import { blockUser, getUsers } from '../http/userApi';
import { useNavigate } from 'react-router-dom';
import { USER_FORM_ROUTE } from '../utils/consts';


const Users = () => {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()
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

      const handleCreateUser=()=>{
        navigate(USER_FORM_ROUTE)
    }



      const toggleBlock = async (userId) => {
        try {
          const {data} = await blockUser(userId)
          setUsers(prevUsers =>
            prevUsers.map(user => {
              if (user.id === userId) {
                return {
                  ...user,
                  isBlocked: !user.isBlocked
                };
              }
              return user;
      })
    );
        } catch (error) {
          alert(error.response.data)
        }
      };

  return (
    <>
      <div className="app">
            <Layout>
                <div className="d-flex justify-content-center" style={{ minHeight: '100vh' }}>
                    <div style={{  width: '90%', maxWidth:'100%' }}>
                    <h2>Аккаунты</h2>
                    <Button onClick={handleCreateUser} className="my-3">Добавить новый аккаунт</Button>
                        <UsersTable users={users} setUsers={setUsers} onToggleBlock={toggleBlock}></UsersTable>
                    </div>
                </div>
            </Layout>
         </div>
     </>
 
  );
};

export default Users;