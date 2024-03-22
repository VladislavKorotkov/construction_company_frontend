import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import {Button} from 'react-bootstrap'
import UsersTable from '../components/UsersTable/UsersTable';


const Users = () => {
    const users = [
        {
            id: 1,
            username: "vlad@mail",
            role: "Админ",
            name: "Вовка",
            surname: "Вовкин",
            phoneNumber: "+375292909202",
            isBlocked: true
        },
        {
            id: 2,
            username: "vlad@mail",
            role: "Админ",
            name: "Вовка",
            surname: "Вовкин",
            phoneNumber: "+375292909202",
            isBlocked: true
        },
        {
            id: 3,
            username: "vladsdsdfdf@mail",
            role: "Админ",
            name: "Вовка",
            surname: "Вовкин",
            phoneNumber: "+375292909202",
            isBlocked: false
        }
    ]
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