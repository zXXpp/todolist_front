import React, { Component } from 'react'
import { Button } from 'antd';
import axios from 'axios'

export default class Login extends Component {
    test = () => {
        axios.get(window.config.baseUrl + 'test').then((res) => {
            console.log(res);
        }).catch((e) => {
            console.log(e);
        })
    }
    render() {
        return (
            <div><Button onClick={this.test}>接口测试按钮</Button></div>
        )
    }
}
