import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Layout from '../components/Layout/Layout';
import UserCard from '../components/UserCard/UserCard';
import PasswordChangeForm from '../components/PasswordChangeForm/PasswordChangeForm';


const Profile = () => {
  return (
    <>
      <div className="app">
            <Layout role="user">
                <div className="d-flex justify-content-center" style={{ minHeight: '100vh' }}>
                    <div style={{  width: '70%', maxWidth:'100%' }}>
                        <UserCard></UserCard>
                        <PasswordChangeForm></PasswordChangeForm>
                    </div>
                </div>
            </Layout>
         </div>
     </>
 
  );
};

export default Profile;