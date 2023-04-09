import { Navigate,lazy } from 'react-router-dom'
// import {lazy}

import Login from "../views/Login"
import Register from '../views/Register'
import Mytodolist from '../views/Mytodolist'


console.log(import('../views/Register'));



export default [
    {
        path: '/',
        element: <Navigate to="/mytodolist" />
    },
    //登录相关的
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/mytodolist',
        element: <Mytodolist />,
    }
]