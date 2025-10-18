import React, { createContext, useContext, useState, type ReactNode } from 'react';

export interface IQuestionnaireFormData {
    [key: string]: string | string[],
    caseId: string,
    userId: string,
    name: string,
    age: string,
    feelsFit: string,
    gameDevices: string[]
};

export type CaseDataType = {
    id: string,
    userId: string,
    formData: IQuestionnaireFormData
};

export type CasesDataContextType = {
    casesData: CaseDataType[];
    setCasesData: (data: CaseDataType[]) => void;
};

export const defaultCaseData: CaseDataType = {
    id: '',
    userId: '',
    formData: {
        caseId: '',
        userId: '',
        name: '',
        age: '',
        feelsFit: '',
        gameDevices: []
    }
};


export const CasesDataContext = createContext<CasesDataContextType | undefined>(undefined);

export const CasesDataProvider = ({ children }: { children: ReactNode }) => {
    const [casesData, setCasesData] = useState<CaseDataType[]>([defaultCaseData]);

    return (
    <CasesDataContext.Provider value={{ casesData, setCasesData }}>
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