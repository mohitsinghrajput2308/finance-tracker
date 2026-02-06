import { createContext, useContext, useState, useEffect } from 'react';
import { useNotification } from './NotificationContext';
import {
    getFromStorage,
    saveToStorage,
    STORAGE_KEYS,
    initializeWithSampleData,
    isAppInitialized
} from '../utils/localStorage';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { success, error } = useNotification();

    useEffect(() => {
        // Initialize sample data if needed
        if (!isAppInitialized()) {
            initializeWithSampleData();
        }

        // Check for existing session
        const savedUser = getFromStorage(STORAGE_KEYS.CURRENT_USER);
        if (savedUser) {
            setCurrentUser(savedUser);
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        const users = getFromStorage(STORAGE_KEYS.USERS, []);
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            const { password: _, ...userWithoutPassword } = user;
            setCurrentUser(userWithoutPassword);
            saveToStorage(STORAGE_KEYS.CURRENT_USER, userWithoutPassword);
            success('Welcome back, ' + user.name + '!');
            return { success: true };
        }

        error('Invalid email or password');
        return { success: false, error: 'Invalid email or password' };
    };

    const register = (userData) => {
        const users = getFromStorage(STORAGE_KEYS.USERS, []);

        if (users.find(u => u.email === userData.email)) {
            error('Email already exists');
            return { success: false, error: 'Email already exists' };
        }

        const newUser = {
            id: 'user_' + Date.now(),
            ...userData,
            currency: '₹',
            dateFormat: 'DD/MM/YYYY',
            createdAt: new Date().toISOString().split('T')[0]
        };

        users.push(newUser);
        saveToStorage(STORAGE_KEYS.USERS, users);

        const { password: _, ...userWithoutPassword } = newUser;
        setCurrentUser(userWithoutPassword);
        saveToStorage(STORAGE_KEYS.CURRENT_USER, userWithoutPassword);

        success('Account created successfully!');
        return { success: true };
    };

    const logout = () => {
        setCurrentUser(null);
        saveToStorage(STORAGE_KEYS.CURRENT_USER, null);
        success('Logged out successfully');
    };

    const updateProfile = (updates) => {
        const users = getFromStorage(STORAGE_KEYS.USERS, []);
        const index = users.findIndex(u => u.id === currentUser.id);

        if (index !== -1) {
            users[index] = { ...users[index], ...updates };
            saveToStorage(STORAGE_KEYS.USERS, users);

            const { password: _, ...userWithoutPassword } = users[index];
            setCurrentUser(userWithoutPassword);
            saveToStorage(STORAGE_KEYS.CURRENT_USER, userWithoutPassword);

            success('Profile updated successfully');
            return { success: true };
        }

        error('Failed to update profile');
        return { success: false };
    };

    const changePassword = (currentPassword, newPassword) => {
        const users = getFromStorage(STORAGE_KEYS.USERS, []);
        const index = users.findIndex(u => u.id === currentUser.id);

        if (index !== -1) {
            if (users[index].password !== currentPassword) {
                error('Current password is incorrect');
                return { success: false, error: 'Current password is incorrect' };
            }

            users[index].password = newPassword;
            saveToStorage(STORAGE_KEYS.USERS, users);
            success('Password changed successfully');
            return { success: true };
        }

        return { success: false };
    };

    const value = {
        currentUser,
        loading,
        login,
        register,
        logout,
        updateProfile,
        changePassword,
        isAuthenticated: !!currentUser
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
