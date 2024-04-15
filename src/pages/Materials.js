import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import {Button} from 'react-bootstrap'
import UsersTable from '../components/UsersTable/UsersTable';
import { blockUser, getUsers } from '../http/userApi';
import { useNavigate } from 'react-router-dom';
import { MATERIAL_FORM_ROUTE, SPECIALITIES_FORM_ROUTE, USER_FORM_ROUTE } from '../utils/consts';
import { deleteSpeciality, getSpecialities } from '../http/SpecialitiesApi';
import SpecialitiesTable from '../components/SpecialitiesTable';
import { deleteMaterial, getMaterials } from '../http/MaterialsApi';
import MaterialsTable from '../components/MaterialsTable';


const Materials = () => {
    const [materials, setMaterials] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const fetchMaterials = async () => {
          try {
            const data = await getMaterials();
            setMaterials(data);
          } catch (error) {
            console.error('Ошибка при получении данных материалов:', error);
          }
        };
        fetchMaterials();
      }, []);

      const handleCreateMaterial=()=>{
        navigate(MATERIAL_FORM_ROUTE)
      }

      const handleDelete = async (materialId) => {
        try {
          const data = await deleteMaterial(materialId);
          setMaterials(materials.filter((item) => item.id !== materialId));
          alert(data)
        } catch (error) {
          alert('Ошибка при удалении материала');
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
                    <h2>Материалы</h2>
                    <Button onClick={handleCreateMaterial} className="my-3">Добавить новый материал</Button>
                        <MaterialsTable materials={materials} setMaterials={setMaterials} onUpdate={handleUpdate} onDelete={handleDelete}></MaterialsTable>
                    </div>
                </div>
            </Layout>
         </div>
     </>
 
  );
};

export default Materials;