import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';
import App from './App';
import './styles/app.scss';
import ScrollToTop from './ScrollToTop';

const container = document.getElementById('root')!;
const root = createRoot(container);
const store = setupStore();

root.render(
    <Router>
        <ScrollToTop />
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
);
