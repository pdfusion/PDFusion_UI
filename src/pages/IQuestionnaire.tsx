export interface IQuestionnaire {
  
};

export interface IQuestionnaireFormData {
    [key: string]: string | string[],
    caseId: string,
    userId: string,
    name: string,
    age: string,
    feelsFit: string,
    gameDevices: string[]
};