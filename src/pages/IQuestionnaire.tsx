export interface IQuestionnaire {
  
};

export interface IQuestionnaireFormData {
    [key: string]: string | string[],
    patientId: string,
    caseManagerId: string,
    name: string,
    age: string,
    feelsFit: string,
    gameDevices: string[]
};