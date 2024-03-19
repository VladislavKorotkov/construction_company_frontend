
import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css'; // Создайте файл Sidebar.css для настройки стилей вашего Sidebar

const Sidebar = ({role}) => {

  let links;
  if (role === 'admin') {
    links = [
      { name: 'Главная', url: '/home' },
      { name: 'Панель управления', url: '/dashboard' },
      { name: 'Пользователи', url: '/users' },
    ];
  } else if (role === 'user') {
    links = [
      { name: 'Профиль', url: '/profile' },
      { name: 'Заявки', url: '/applications' },
      { name: 'Проекты', url: '/projects' },
    ];
  } else {
    links = [];
  }

  return (
    <div className="sidebar">
      <Nav className="flex-column">
      {links.map((link, index) => (
          <NavItem key={index} className = "sidebar-link">
            <Nav.Link  href={link.url}>{link.name}</Nav.Link>
          </NavItem>
          ))}
        
      </Nav>
    </div>
  );
};

export default Sidebar;