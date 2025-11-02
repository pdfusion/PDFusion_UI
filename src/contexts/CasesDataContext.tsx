import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { casesSeed } from '../data/casesSeed';
import type { IQuestionnaireFormData } from '../pages/IQuestionnaire';
import { LOCAL_STORAGE_CASES_KEY } from '../data/constants';

export interface IScores {
  generalFatigueScore: number,
  physicalFatigueScore: number,
  reducedActivityScore: number,
  reducedMotivationScore: number,
  mentalFatigueScore: number
}

export type CaseDataType = {
    id: string,
    patientId: string,
    caseManagerId: string,
    formData: IQuestionnaireFormData,
    scores: IScores
};

export type CasesDataContextType = {
  casesData: CaseDataType[];
  setCasesData: React.Dispatch<React.SetStateAction<CaseDataType[]>>;
};

export const defaultCaseData: CaseDataType = {
    id: '',
    patientId: '',
    caseManagerId: '',
    scores: {
      generalFatigueScore: 0,
      physicalFatigueScore: 0,
      reducedActivityScore: 0,
      reducedMotivationScore: 0,
      mentalFatigueScore: 0
    },
    formData: {
        caseId: '',
        patientId: '',
        caseManagerId: '',
        name: '',
        age: '',
        feelFit: '',
        feelCalm: '',
        gameDevices: [],
        physicalAbility: '',
        feelTired: ''
    }
};

export const CasesDataContext = createContext<CasesDataContextType | undefined>(undefined);

export const CasesDataProvider = ({ children }: { children: ReactNode }) => {
  const [casesData, setCasesData] = useState<CaseDataType[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_CASES_KEY);
      return stored ? JSON.parse(stored) : casesSeed;
    } catch (error) {
      console.error('Failed to load cases from localStorage:', error);
      return [defaultCaseData];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_CASES_KEY, JSON.stringify(casesData));
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