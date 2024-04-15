import React, { useContext } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { APPLICATIONS_AVAILABLE_ROUTE, APPLICATIONS_ROUTE, MATERIAL_ROUTE, PROFILE_ROUTE, PROJECTS_ROUTE, PROJECT_MANAGMENT_ROUTE, SPECIALITIES_ROUTE, USERS_ROUTE, WORK_ROUTE } from '../../utils/consts';

const Sidebar = observer( () => {
  let links;
  let heading;
  const {userApp} = useContext(Context)

  if (userApp.getRole() === 'ROLE_ADMIN') {
    heading = 'Администратор';
    links = [
      { name: 'Профиль', url: PROFILE_ROUTE, icon: 'bi bi-person' },
      { name: 'Аккаунты', url: USERS_ROUTE, icon: 'bi bi-people' },
      { name: 'Проекты', url: PROJECTS_ROUTE, icon: 'bi bi-folder' },
      { name: 'Специальности', url: SPECIALITIES_ROUTE, icon: 'bi bi-folder' },
      { name: 'Материалы', url: MATERIAL_ROUTE, icon: 'bi bi-folder' },
      { name: 'Работы', url: WORK_ROUTE, icon: 'bi bi-folder' },
    ];
  } else if (userApp.getRole() === 'ROLE_USER') {
    heading = 'Пользователь';
    links = [
      { name: 'Профиль', url: PROFILE_ROUTE, icon: 'bi bi-person' },
      { name: 'Заявки', url: APPLICATIONS_ROUTE, icon: 'bi bi-list' },
      { name: 'Проекты', url: PROJECTS_ROUTE, icon: 'bi bi-folder' },
    ];
  } else if (userApp.getRole()  === 'ROLE_BUILDER') {
    heading = 'Строитель';
    links = [
      { name: 'Профиль', url: PROFILE_ROUTE, icon: 'bi bi-person' },
      { name: 'Задачи', url: '/tasks', icon: 'bi bi-check-square' },
      { name: 'Проекты', url: PROJECTS_ROUTE, icon: 'bi bi-folder' },
    ];
  } else if (userApp.getRole() === 'ROLE_FOREMAN') {
    heading = 'Бригадир';
    links = [
      { name: 'Профиль', url: PROFILE_ROUTE, icon: 'bi bi-person' },
      { name: 'Заявки', url: APPLICATIONS_AVAILABLE_ROUTE, icon: 'bi bi-list' },
      { name: 'Проекты', url: PROJECTS_ROUTE, icon: 'bi bi-folder' },
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