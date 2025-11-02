export interface IQuestionnaireFormData {
    [key: string]: string | string[],
    patientId: string,
    caseManagerId: string,
    name: string,
    age: string,
    feelFit: string,
    feelCalm: string,
    gameDevices: string[],
    physicalAbleLittle: string,
    feelTired: string
};