import React from 'react';
import './Layout.css';
import Sidebar from '../Sidebar/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar/>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;