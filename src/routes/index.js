import { Navigate } from 'react-router-dom'

import Login from "../views/login/Index"
import Register from '../views/register/Index'
import Test from '../views/register/test/Test'
import Test2 from '../views/register/test2/Test2'




export default [
    {
        path: '/',
        element: <Navigate to="/login" />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />,
        children: [
            {
                path: 'test',
                element: <Test />
            },
            {
                path: 'test2',
                element: <Test2 />
            },
        ]
    }
]