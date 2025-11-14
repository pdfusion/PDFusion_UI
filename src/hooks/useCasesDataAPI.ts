import { useCasesData } from '../contexts/CasesDataContext';
import { defaultCaseData, type CaseDataType } from '../contexts/CasesDataContext';
import { LOCAL_STORAGE_CASES_KEY } from '../data/constants';
import { calcMFIGeneralFatigueScore, calcMFIMentalFatigueScore, calcMFIPhysicalFatigueScore, calcMFIReducedActivityScore, calcMFIReducedModivationScore } from '../models/formModels/MFI';
import type { IQuestionnaireFormData } from '../pages/IQuestionnaire';
import { useUsersDataAPI } from './useUsersDataAPI';

export const useCasesDataAPI = () => {
    const { casesData, setCasesData } = useCasesData();
    const { getUserById } = useUsersDataAPI();
    const initFormData: IQuestionnaireFormData = defaultCaseData.formData;

    const getCases = async (): Promise<CaseDataType[] | null> => {
        try {
            const stored = localStorage.getItem(LOCAL_STORAGE_CASES_KEY);
            if (stored) {
                const parsed = JSON.parse(stored) as CaseDataType[];
                return Promise.resolve(parsed);
            } else {
                return Promise.resolve(null);
            }
        } catch (error) {
            console.error('Failed to fetch case data:', error);
            return Promise.resolve(null);
        }
    };

    const getCaseById = async (caseId: string): Promise<CaseDataType> => {
        try {
            const cases = await getCases();
            const targetCase = (cases || []).find((caseItem) => caseItem.id === caseId);
            return targetCase ?? defaultCaseData;
        } catch (error) {
            console.error('Failed to fetch case data:', error);
            throw error;
        }
    };

    const createCase = async (formData: IQuestionnaireFormData): Promise<CaseDataType> => {
        try {
            const stored = localStorage.getItem(LOCAL_STORAGE_CASES_KEY);
            const existingCases: CaseDataType[] = stored ? JSON.parse(stored) : [];

            const caseId = existingCases.length ? `pdfn:cases:${existingCases.length + 1}` : 'pfn:cases:1';
            const patientRes = await getUserById(formData?.patientId);
            const patientName = patientRes?.name || "";
            const patientId = formData.patientId;
            const caseManagerId = formData.caseManagerId;

            const createdCase: CaseDataType = {
                id: caseId,
                patientId,
                caseManagerId,
                formData: {
                    ...formData,
                    caseId,
                    name: patientName
                },
                scores: {
                    generalFatigueScore: calcMFIGeneralFatigueScore(formData),
                    physicalFatigueScore: calcMFIPhysicalFatigueScore(formData),
                    reducedActivityScore: calcMFIReducedActivityScore(formData),
                    reducedMotivationScore: calcMFIReducedModivationScore(formData),
                    mentalFatigueScore: calcMFIMentalFatigueScore(formData)
                }
            };

            // Avoid duplicate case IDs
            const exists = existingCases.some((c) => c.id === createdCase.id);
            if (exists) {
            console.warn(`Case with ID ${createdCase.id} already exists. Skipping creation.`);
            return createdCase;
            }

            const updatedCases = [...existingCases, createdCase];

            // Save to localStorage
            localStorage.setItem(LOCAL_STORAGE_CASES_KEY, JSON.stringify(updatedCases));

            // Update context state
            setCasesData(updatedCases);

            return createdCase;
        } catch (error) {
            console.error('Failed to create case:', error);
            throw error;
        }
    };

    const updateCase = async (caseId: string, formData: IQuestionnaireFormData): Promise<CaseDataType> => {
        try {
            if (!caseId) throw new Error(`No case found with id ${caseId}`);
            
            // Ensure formData has the correct caseId
            const updatedFormData: IQuestionnaireFormData = {
                ...formData,
                caseId,
            };

            const updatedCases = (casesData || []).map((caseItem) =>
            caseItem.id === caseId
                ? { 
                    ...caseItem,
                    patientId: updatedFormData.patientId,
                    caseManagerId: updatedFormData.caseManagerId,
                    formData: updatedFormData,
                    scores: {
                        generalFatigueScore: calcMFIGeneralFatigueScore(formData),
                        physicalFatigueScore: calcMFIPhysicalFatigueScore(formData),
                        reducedActivityScore: calcMFIReducedActivityScore(formData),
                        reducedMotivationScore: calcMFIReducedModivationScore(formData),
                        mentalFatigueScore: calcMFIMentalFatigueScore(formData)
                    }
                }
                : caseItem
            );

            // Save to localStorage
            localStorage.setItem(LOCAL_STORAGE_CASES_KEY, JSON.stringify(updatedCases));

            setCasesData(updatedCases);

            return await getCaseById(caseId);
        } catch (error) {
            console.error('Failed to update case data:', error);
            throw error;
        }
    };

    return {
        initFormData,
        getCases,
        getCaseById,
        createCase,
        updateCase,
    };
};