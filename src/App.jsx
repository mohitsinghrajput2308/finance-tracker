import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

// Layout
import Layout from './components/Layout/Layout';
import ProtectedRoute from './components/Layout/ProtectedRoute';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Income from './pages/Income';
import Expenses from './pages/Expenses';
import Budgets from './pages/Budgets';
import Goals from './pages/Goals';
import Transactions from './pages/Transactions';
import Reports from './pages/Reports';
import Investments from './pages/Investments';
import Bills from './pages/Bills';
import Calculators from './pages/Calculators';
import Categories from './pages/Categories';
import Settings from './pages/Settings';
import Help from './pages/Help';

function App() {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-100">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <p className="mt-4 text-gray-500">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route
                path="/*"
                element={
                    <ProtectedRoute>
                        <Layout>
                            <Routes>
                                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/income" element={<Income />} />
                                <Route path="/expenses" element={<Expenses />} />
                                <Route path="/budgets" element={<Budgets />} />
                                <Route path="/goals" element={<Goals />} />
                                <Route path="/transactions" element={<Transactions />} />
                                <Route path="/reports" element={<Reports />} />
                                <Route path="/investments" element={<Investments />} />
                                <Route path="/bills" element={<Bills />} />
                                <Route path="/calculators" element={<Calculators />} />
                                <Route path="/categories" element={<Categories />} />
                                <Route path="/settings" element={<Settings />} />
                                <Route path="/help" element={<Help />} />
                                <Route path="*" element={<Navigate to="/dashboard" replace />} />
                            </Routes>
                        </Layout>
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
}

export default App;
