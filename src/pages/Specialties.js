import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import {Button} from 'react-bootstrap'
import UsersTable from '../components/UsersTable/UsersTable';
import { blockUser, getUsers } from '../http/userApi';
import { useNavigate } from 'react-router-dom';
import { SPECIALITIES_FORM_ROUTE, USER_FORM_ROUTE } from '../utils/consts';
import { deleteSpeciality, getSpecialities } from '../http/SpecialitiesApi';
import SpecialitiesTable from '../components/SpecialitiesTable';


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
        fetchSpecialities();
      }, []);

      const handleCreateSpeciality=()=>{
        navigate(SPECIALITIES_FORM_ROUTE)
      }

      const handleDelete = async (specialityId) => {
        try {
          const data = await deleteSpeciality(specialityId);
          setSpecialities(specialities.filter((item) => item.id !== specialityId));
          alert(data)
        } catch (error) {
          alert('Ошибка при удалении специальности');
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
                    <h2>Специальности</h2>
                    <Button onClick={handleCreateSpeciality} className="my-3">Добавить новую специальность</Button>
                        <SpecialitiesTable specialities={specialities} setSpecialities={setSpecialities} onUpdate={handleUpdate} onDelete={handleDelete}></SpecialitiesTable>
                    </div>
                </div>
            </Layout>
         </div>
     </>
 
  );
};

export default Specialities;