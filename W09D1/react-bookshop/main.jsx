import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.scss';
import {App} from './scripts/App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);