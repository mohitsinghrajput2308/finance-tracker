import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { FinanceProvider } from './context/FinanceContext.jsx'
import { NotificationProvider } from './context/NotificationContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <NotificationProvider>
                    <AuthProvider>
                        <FinanceProvider>
                            <App />
                        </FinanceProvider>
                    </AuthProvider>
                </NotificationProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
