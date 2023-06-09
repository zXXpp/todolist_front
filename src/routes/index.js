/* eslint-disable import/no-anonymous-default-export */
import { Navigate } from 'react-router-dom'
import { lazy } from 'react'

import Login from "@views/Login"
//懒加载
const Register = lazy(() => import('@views/Register'))
const Home = lazy(() => import('@views/Home'))
const Personal = lazy(() => import('@views/Personal'))
const Todo = lazy(() => import('@views/Todo'))



export default [
    {
        path: '/',
        element: <Navigate to="/home" />
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
        path: '/home',
        element: <Home />,
        children: [
            {
                path: '',
                element: <Navigate to="todo" />,
            },
            {
                path: 'todo',
                element: <Todo />
            },
            {
                path: 'personal',
                element: <Personal />,
            },

        ]
    }]