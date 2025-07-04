import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CounterProvider } from './contexts/CounterContext';
import { ThemeToggleProvider } from './contexts/ThemeToggle';
import { UserContextProvider } from './contexts/UserContext';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';



const root = ReactDOM.createRoot(document.getElementById('root'));


// ===================================context==================================
root.render(
    // <React.StrictMode>
        <CounterProvider>
            <ThemeToggleProvider>
                <UserContextProvider>
                    <App />
                </UserContextProvider>
            </ThemeToggleProvider>
        </CounterProvider>
    // </React.StrictMode>
);

// =========================================================redux===========================
// root.render(
//     // <React.StrictMode>
//     <Provider store={store}>
//         <App />
//     </Provider>
    
//     // </React.StrictMode>
// );


