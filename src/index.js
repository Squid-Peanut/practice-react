import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import App2 from './App2';
import App3 from './App3';
import "./styles.css";

const container = document.getElementById('root');
// Root를 생성
const root = ReactDOM.createRoot(container);
//생성한 Root에 reactdom을 생성

root.render(
  <React.StrictMode>
    {/* <App />,
  <App2 />, */}
    <App3 />
  </React.StrictMode>
);