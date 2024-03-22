import React, { useContext } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

const Sidebar = observer( () => {
  let links;
  let heading;
  const {userApp} = useContext(Context)

  if (userApp.getRole() === 'ROLE_ADMIN') {
    heading = 'Администратор';
    links = [
      { name: 'Профиль', url: '/profile', icon: 'bi bi-person' },
      { name: 'Пользователи', url: '/users', icon: 'bi bi-people' },
      { name: 'Проекты', url: '/projects', icon: 'bi bi-folder' },
    ];
  } else if (userApp.getRole() === 'ROLE_USER') {
    heading = 'Пользователь';
    links = [
      { name: 'Профиль', url: '/profile', icon: 'bi bi-person' },
      { name: 'Заявки', url: '/applications', icon: 'bi bi-list' },
      { name: 'Проекты', url: '/projects', icon: 'bi bi-folder' },
    ];
  } else if (userApp.getRole()  === 'ROLE_BUILDER') {
    heading = 'Строитель';
    links = [
      { name: 'Профиль', url: '/profile', icon: 'bi bi-person' },
      { name: 'Задачи', url: '/tasks', icon: 'bi bi-check-square' },
      { name: 'Проекты', url: '/projects', icon: 'bi bi-folder' },
    ];
  } else if (userApp.getRole() === 'ROLE_FOREMAN') {
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
            <Link className='link' to={link.url}>{link.name}</Link>
          </NavItem>
        ))}
      </Nav>
    </div>
  );
})

export default Sidebar;