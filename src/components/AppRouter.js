import React, { useContext } from 'react';
import {Routes, Route,  Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '..';
import NotFound from '../pages/NotFound';

export default function AppRouter () {
    const {userApp} = useContext(Context)
    return (
        <Routes>
          {userApp._isAuth && authRoutes.map(({path, Component})=>
            <Route key={path} path={path} Component={Component} exact></Route>
          )}  
          {publicRoutes.map(({path, Component})=>
            <Route key={path} path={path} Component={Component} exact></Route>
          )}  
          <Route path="*" Component={NotFound} />
        </Routes>
    )
}