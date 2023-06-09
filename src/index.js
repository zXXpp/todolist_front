import React from 'react';
import ReactDOM from 'react-dom/client';
import "reset-css"
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </BrowserRouter>
);

