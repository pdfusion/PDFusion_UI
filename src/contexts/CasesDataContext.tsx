import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { casesSeed } from '../data/casesSeed';

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
  setCasesData: React.Dispatch<React.SetStateAction<CaseDataType[]>>;
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
    gameDevices: [],
  },
};

const LOCAL_STORAGE_KEY = 'casesData';

export const CasesDataContext = createContext<CasesDataContextType | undefined>(undefined);

export const CasesDataProvider = ({ children }: { children: ReactNode }) => {
  const [casesData, setCasesData] = useState<CaseDataType[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      return stored ? JSON.parse(stored) : casesSeed;
    } catch (error) {
      console.error('Failed to load cases from localStorage:', error);
      return [defaultCaseData];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(casesData));
    } catch (error) {
      console.error('Failed to save cases to localStorage:', error);
    }
  }, [casesData]);

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