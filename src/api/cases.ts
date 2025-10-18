import { defaultCaseData, type CaseDataType, type IQuestionnaireFormData } from '../contexts/CasesDataContext';

export const initFormData: IQuestionnaireFormData = defaultCaseData.formData;

export const getCases = async (casesData: CaseDataType[]): Promise<CaseDataType[]> => {
    try
    {
        return Promise.resolve(casesData);
    }
    catch (error) {
        console.error('Failed to fetch case data:', error);
        throw error;
    }

}

export const getCaseById = async (caseId: string, casesData: CaseDataType[]): Promise<CaseDataType> => {
    try
    {
        const targetCase = casesData.find((caseItem: CaseDataType) => caseItem.id === caseId);
        if(targetCase?.id)
            return Promise.resolve(targetCase);
        return Promise.resolve(defaultCaseData);
    }
    catch (error) {
        console.error('Failed to fetch case data:', error);
        throw error;
    }
}

export const createCase = async (formData: IQuestionnaireFormData, casesData: CaseDataType[], setCasesData: (data: CaseDataType[]) => void): Promise<CaseDataType> => {
    try
    {
        const createdCase = {
            id: formData.caseId,
            userId: formData.userId,
            formData
        };
        const updatedCases = [...casesData, createdCase]

        setCasesData(updatedCases);
        return await getCaseById(createdCase.id, casesData);
    }
    catch (error) {
        console.error('Failed to fetch case data:', error);
        throw error;
    }
}

export const updateFormDataByCaseId = async (caseId: string, formData: IQuestionnaireFormData, casesData: CaseDataType[], setCasesData: (data: CaseDataType[]) => void): Promise<CaseDataType> => {
    try
    {
        const errorMessage = `No case found with id ${caseId}`;
        if(!caseId) throw errorMessage;

        const updatedCases = casesData.map((caseItem) =>
            caseItem.userId === caseId
            ? { ...caseItem, formData }
            : caseItem
        );

        setCasesData(updatedCases);
        return await getCaseById(caseId, casesData);
    }
    catch (error) {
        console.error('Failed to fetch case data:', error);
        throw error;
    }
}