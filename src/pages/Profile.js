import React, { useContext, useState } from 'react';
import Layout from '../components/Layout/Layout';
import UserCard from '../components/UserCard/UserCard';
import PasswordChangeForm from '../components/PasswordChangeForm/PasswordChangeForm';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../utils/consts';


const Profile = observer(() => {
  const {userApp} = useContext(Context)
  const navigate = useNavigate()
  const logout = async()=>{
    localStorage.clear()
    userApp.setUser(false)
    userApp.setIsAuth(false)
    userApp.setRole(false)
    navigate(HOME_ROUTE)
  }
  return (
    <>
      <div className="app">
            <Layout>
                <div className="d-flex justify-content-center" style={{ minHeight: '100vh' }}>
                    <div style={{  width: '70%', maxWidth:'100%' }}>
                        <UserCard handleLogout={logout}></UserCard>
                        <PasswordChangeForm></PasswordChangeForm>
                    </div>
                </div>
            </Layout>
         </div>
     </>
 
  );
}) 

export default Profile;