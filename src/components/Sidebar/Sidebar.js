import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';

const Sidebar = ({ role }) => {
  let links;
  let heading;

  if (role === 'admin') {
    heading = 'Администратор';
    links = [
      { name: 'Профиль', url: '/profile', icon: 'bi bi-person' },
      { name: 'Пользователи', url: '/users', icon: 'bi bi-people' },
      { name: 'Проекты', url: '/projects', icon: 'bi bi-folder' },
    ];
  } else if (role === 'user') {
    heading = 'Пользователь';
    links = [
      { name: 'Профиль', url: '/profile', icon: 'bi bi-person' },
      { name: 'Заявки', url: '/applications', icon: 'bi bi-list' },
      { name: 'Проекты', url: '/projects', icon: 'bi bi-folder' },
    ];
  } else if (role === 'builder') {
    heading = 'Строитель';
    links = [
      { name: 'Профиль', url: '/profile', icon: 'bi bi-person' },
      { name: 'Задачи', url: '/tasks', icon: 'bi bi-check-square' },
      { name: 'Проекты', url: '/projects', icon: 'bi bi-folder' },
    ];
  } else if (role === 'foreman') {
    heading = 'Бригадир';
    links = [
      { name: 'Профиль', url: '/profile', icon: 'bi bi-person' },
      { name: 'Заявки', url: '/applications', icon: 'bi bi-list' },
      { name: 'Проекты', url: '/projects', icon: 'bi bi-folder' },
    ];
  } else {
    heading = 'Роль не определена';
    links = [];
  }

  return (
    <div className="sidebar">
      <h2 className="sidebar-heading">{heading}</h2>
      <Nav className="flex-column">
        {links.map((link, index) => (
          <NavItem key={index} className="sidebar-link">
            <Nav.Link href={link.url}>
              {link.name}
            </Nav.Link>
          </NavItem>
        ))}
      </Nav>
    </div>
  );
};

export default Sidebar;