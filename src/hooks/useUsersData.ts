import { useContext } from 'react';
import { UsersDataContext } from '../contexts/UsersDataContext';

export const useUsersData = () => {
    const context = useContext(UsersDataContext);
    if (!context) {
        throw new Error('useUsersData must be used within a UsersDataProvider');
    }
    return context;
};