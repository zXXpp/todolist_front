import React, { useState, Fragment } from 'react'
import { Navigate } from 'react-router-dom'
import { Button } from 'antd';

import { register } from '../../request/index'


export default function Index() {
    const [sum, setSum] = useState(1)
    
    return (
        <Fragment>
            <Button>haha</Button>
        </Fragment>
    )
}
