import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface IQuestionnaireFormData {
    feelsFit: string,
    gameDevices: string[]
};

type CaseDataType = {
    userId: string,
    formData: IQuestionnaireFormData
};

type CasesDataContextType = {
    caseData: CaseDataType;
    setCaseData: (data: CaseDataType) => void;
};

const defaultCaseData: CaseDataType = {
    userId: '',
    formData: {
        feelsFit: '',
        gameDevices: []
    }
};


export const CasesDataContext = createContext<CasesDataContextType | undefined>(undefined);

export const CasesDataProvider = ({ children }: { children: ReactNode }) => {
    const [caseData, setCaseData] = useState<CaseDataType>(defaultCaseData);

    return (
    <CasesDataContext.Provider value={{ caseData, setCaseData }}>
        {children}
    </CasesDataContext.Provider>
    );
};

export const useCasesData = () => {
    const context = useContext(CasesDataContext);
    if (!context) {
    throw new Error('useCasesData must be used within a CasesDataProvider');
    }
    return context;
};