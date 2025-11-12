import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { IQuestionnaireFormData } from '../pages/IQuestionnaire';
import { LOCAL_STORAGE_CASES_KEY } from '../data/constants';

export interface IScores {
  generalFatigueScore: number;
  physicalFatigueScore: number;
  reducedActivityScore: number;
  reducedMotivationScore: number;
  mentalFatigueScore: number;
}

export type CaseDataType = {
  id: string;
  patientId: string;
  caseManagerId: string;
  formData: IQuestionnaireFormData;
  scores: IScores;
};

export type CasesDataContextType = {
  casesData: CaseDataType[] | null;
  setCasesData: React.Dispatch<React.SetStateAction<CaseDataType[] | null>>;
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
    // MFI
    feelFit: '',
    physicalAbleLittle: '',
    feelTired: '',
    // Legacy/Misc
    feelCalm: '',
    // Gaming Habits
    gameDevices: [],
    preferredGamingDevice: [],
    // Fatigue Severity
    FSV1: '',
    FSV2: '',
    // CES-D
    CES_D1: '',
    CES_D2: '',
    // STAI-1
    ifeelcalm: '',
    ifeelsecure: '',
    // PANAS-SF
    interested: '',
    distressed: '',
    excited: ''
    }
};

export const CasesDataContext = createContext<CasesDataContextType | undefined>(undefined);

export const CasesDataProvider = ({ children }: { children: ReactNode }) => {
  const [casesData, setCasesData] = useState<CaseDataType[] | null>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_CASES_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Failed to load cases from localStorage:', error);
      return null;
    }
  });

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