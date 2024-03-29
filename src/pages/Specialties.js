import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import {Button} from 'react-bootstrap'
import UsersTable from '../components/UsersTable/UsersTable';
import { blockUser, getUsers } from '../http/userApi';
import { useNavigate } from 'react-router-dom';
import { USER_FORM_ROUTE } from '../utils/consts';
import { getSpecialities } from '../http/SpecialitiesApi';


const Specialities = () => {
    const [specialities, setSpecialities] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const fetchSpecialities = async () => {
          try {
            const data = await getSpecialities();
            setSpecialities(data);
          } catch (error) {
            console.error('Ошибка при получении данных специальностей:', error);
          }
        };
        fetchUsers();
      }, []);

      const handleCreateSpeciality=()=>{
        navigate(USER_FORM_ROUTE)
      }



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

export default Specialities;