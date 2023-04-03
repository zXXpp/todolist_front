import { Navigate } from 'react-router-dom'

import Login from "../views/Login"
import Register from '../views/Register'
import Mytodolist from '../views/Mytodolist'




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
        element: <Register />
    },
    {
        path: '/mytodolist',
        element: <Mytodolist />
    }
]