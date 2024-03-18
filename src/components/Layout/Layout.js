import React from 'react';
import './Layout.css';
import Sidebar from '../Sidebar/Sidebar';

const Layout = ({ role, children }) => {
  return (
    <div className="layout">
      <Sidebar role={role} />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;