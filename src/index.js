import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// 性能检测
import reportWebVitals from './reportWebVitals';

// 创建实例挂载
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 检查react语法是否合理
  <React.StrictMode>
    {/* 入口组件 */}
    <App />
  </React.StrictMode>
);
reportWebVitals();
