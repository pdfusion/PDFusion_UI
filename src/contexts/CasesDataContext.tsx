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
    MFI1FeelFit: '',
    MFI2PhysicallyDoLittle: '',
    MFI3VeryActive: '',
    MFI4NiceThings: '',
    MFI5Tired: '',
    MFI6DoLot: '',
    MFI7KeepThoughts: '',
    MFI8TakeOnLot: '',
    MFI9DreadDoingThings: '',
    MFI10DoLittle: '',
    MFI11ConcentrateWell: '',
    MFI12Rested: '',
    MFI13EffortToConcentrate: '',
    MFI14BadCondition: '',
    MFI15LotsOfPlans: '',
    MFI16TireEasily: '',
    MFI17GetLittleDone: '',
    MFI18DoingAnything: '',
    MFI19ThoughtsWander: '',
    MFI20ExcellentCondition: '',
    // Legacy/Misc
    feelCalm: '',
    // Gaming Habits
    GH1PlayDevices: [],
    GH2PreferredDevice: [],
    // Fatigue Severity
    FSV1Motivation: '',
    FSV2Exercise: '',
    FSV3EasilyFatigued: '',
    FSV4PhysicalFunctioning: '',
    FSV5FrequentProblems: '',
    FSV6SustainedPhysicalFunctioning: '',
    FSV7DutiesResponsibilities: '',
    FSV8MostDisabling: '',
    FSV9Interferes: '',
    // CES-D
    CESD1Bothered: '',
    CESD2Eating: '',
    CESD3ShakeBlues: '',
    CESD4GoodAsOthers: '',
    CESD5MindOnDoing: '',
    CESD6Depressed: '',
    CESD7Effort: '',
    CESD8Hopeful: '',
    CESD9Failure: '',
    CESD10Fearful: '',
    CESD11RestlessSleep: '',
    CESD12Happy: '',
    CESD13TalkedLess: '',
    CESD14Lonely: '',
    CESD15Unfriendly: '',
    CESD16EnjoyedLife: '',
    CESD17CryingSpells: '',
    CESD18Sad: '',
    CESD19DislikedMe: '',
    CESD20GetGoing: '',
    // STAI-1
    STAI1FeelCalm: '',
    STAI2FeelSecure: '',
    STAI3AmTense: '',
    STAI4FeelStrained: '',
    STAI5FeelAtEase: '',
    STAI6FeelUpset: '',
    STAI7WorryMisfortunes: '',
    STAI8FeelSatisfied: '',
    STAI9FeelFrightened: '',
    STAI10FeelComfortable: '',
    STAI11FeelSelfConfident: '',
    STAI12FeelNervous: '',
    STAI13AmJittery: '',
    STAI14FeelIndecisive: '',
    STAI15AmRelaxed: '',
    STAI16FeelContent: '',
    STAI17AmWorried: '',
    STAI18FeelConfused: '',
    STAI19FeelSteady: '',
    STAI20FeelPleasant: '',
    // PANAS-SF
    PANAS1Interested: '',
    PANAS2Distressed: '',
    PANAS3Excited: '',
    PANAS4Upset: '',
    PANAS5Strong: '',
    PANAS6Guilty: '',
    PANAS7Scared: '',
    PANAS8Hostile: '',
    PANAS9Enthusiastic: '',
    PANAS10Proud: '',
    PANAS11Irritable: '',
    PANAS12Alert: '',
    PANAS13Ashamed: '',
    PANAS14Inspired: '',
    PANAS15Nervous: '',
    PANAS16Determined: '',
    PANAS17Attentive: '',
    PANAS18Jittery: '',
    PANAS19Active: '',
    PANAS20Afraid: '',
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