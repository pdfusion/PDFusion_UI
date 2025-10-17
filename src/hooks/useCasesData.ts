import { useContext } from 'react';
import { CasesDataContext } from '../contexts/CasesDataContext';

export const useCasesData = () => {
    const context = useContext(CasesDataContext);
    if (!context) {
        throw new Error('useCasesData must be used within a CasesDataProvider');
    }
    return context;
};