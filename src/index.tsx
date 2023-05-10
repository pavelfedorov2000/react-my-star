import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';
import App from './App';
import './styles/app.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);
const store = setupStore();

root.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>
);
