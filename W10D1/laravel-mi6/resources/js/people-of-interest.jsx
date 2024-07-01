import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './people-of-interest/App';
import {PersonDetail} from "./people-of-interest/components/PersonDetail.jsx";

const root = ReactDOM.createRoot(document.getElementById('people-of-interest'));
root.render(
    <>
        <App/>
    </>
);
