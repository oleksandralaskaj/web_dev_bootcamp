import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './people-of-interest/App';
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById('people-of-interest'));
root.render(
    <>
        <App/>
    </>
);
