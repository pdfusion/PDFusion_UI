import { useCasesData } from '../contexts/CasesDataContext';
import { defaultCaseData, type CaseDataType, type IQuestionnaireFormData } from '../contexts/CasesDataContext';
import { casesSeed } from '../data/casesSeed';

export const useCasesDataAPI = () => {
    const { casesData, setCasesData } = useCasesData();

    const initFormData: IQuestionnaireFormData = defaultCaseData.formData;

    const getCases = async (): Promise<CaseDataType[]> => {
        try {
            return await Promise.resolve(casesSeed);
        } catch (error) {
            console.error('Failed to fetch case data:', error);
            throw error;
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
            const createdCase = {
                id: formData.caseId,
                userId: formData.userId,
                formData,
            };
            const updatedCases = [...casesData, createdCase];
            setCasesData(updatedCases);

            return await getCaseById(createdCase.id);
        } catch (error) {
            console.error('Failed to create case:', error);
            throw error;
        }
    };

    const updateFormDataByCaseId = async (caseId: string, formData: IQuestionnaireFormData): Promise<CaseDataType> => {
        try {
            if (!caseId) throw new Error(`No case found with id ${caseId}`);

            const updatedCases = casesData.map((caseItem) =>
                caseItem.userId === caseId ? { ...caseItem, formData } : caseItem
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