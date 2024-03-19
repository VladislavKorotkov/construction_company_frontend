import React, { useContext } from 'react';
import {Routes, Route,  Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '..';
import NotFound from '../pages/NotFound';

export default function Completed ({isCompleted}) {
    return (
        <div>
          {isCompleted ? (
            <span className="text-success">Завершено</span>
          ) : (
            <span className="text-warning">В процессе</span>
          )}
        </div>
    )
}