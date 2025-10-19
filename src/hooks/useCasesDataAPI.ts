import { useCasesData } from '../contexts/CasesDataContext';
import { defaultCaseData, type CaseDataType } from '../contexts/CasesDataContext';
import { casesSeed } from '../data/casesSeed';
import type { IQuestionnaireFormData } from '../pages/IQuestionnaire';

export const useCasesDataAPI = () => {
    const { casesData, setCasesData } = useCasesData();
    const initFormData: IQuestionnaireFormData = defaultCaseData.formData;
    const LOCAL_STORAGE_KEY = 'casesData';

    const getCases = async (): Promise<CaseDataType[]> => {
        try {
            const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored) as CaseDataType[];
                return Promise.resolve(parsed);
            } else {
                return Promise.resolve(casesSeed);
            }
        } catch (error) {
            console.error('Failed to fetch case data:', error);
            return Promise.resolve(casesSeed); // fallback to seed data on error
        }
    };

    const getCaseById = async (caseId: string): Promise<CaseDataType> => {
        try {
            const cases = await getCases();
            const targetCase = cases.find((caseItem) => caseItem.id === caseId);
            return targetCase ?? defaultCaseData;
        } catch (error) {
            console.error('Failed to fetch case data:', error);
            throw error;
        }
    };

    const createCase = async (formData: IQuestionnaireFormData): Promise<CaseDataType> => {
        try {
            const caseId = formData.caseId || `pdfn:cases:${casesData.length + 1}`;
            const userId = formData.userId || `pdfn:users:${casesData.length + 1}`;
            const createdCase: CaseDataType = {
                id: caseId,
                userId,
                formData: {
                    ...formData,
                    caseId,
                    userId
                }
            };

            // Avoid duplicate case IDs
            const exists = casesData.some((c) => c.id === createdCase.id);
            if (exists) {
                console.warn(`Case with ID ${createdCase.id} already exists. Skipping creation.`);
                return createdCase;
            }

            // Update context state
            setCasesData((prevCases) => [...prevCases, createdCase]);

            return createdCase;
        } catch (error) {
            console.error('Failed to create case:', error);
            throw error;
        }
    };

    const updateFormDataByCaseId = async (caseId: string, formData: IQuestionnaireFormData): Promise<CaseDataType> => {
        try {
            if (!caseId) throw new Error(`No case found with id ${caseId}`);
            
            // Ensure formData has the correct caseId and userId
            const updatedFormData: IQuestionnaireFormData = {
                ...formData,
                caseId,
            };

            const updatedCases = casesData.map((caseItem) =>
            caseItem.id === caseId
                ? { ...caseItem, formData: updatedFormData }
                : caseItem
            );

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
        updateFormDataByCaseId,
    };
};