export interface IQuestionnaireFormData {
    [key: string]: string | string[],
    // Common identifiers
    patientId: string,
    caseManagerId: string,
    caseId: string,
    // Demographics
    name: string,
    age: string,
    // MFI
    feelFit: string,
    physicalAbleLittle: string,
    feelTired: string,
    // Legacy/Misc
    feelCalm: string,
    // Gaming Habits
    gameDevices: string[],
    preferredGamingDevice: string[],
    // Fatigue Severity (FSV)
    FSV1: string,
    FSV2: string,
    // CES-D
    CES_D1: string,
    CES_D2: string,
    // STAI-1
    ifeelcalm: string,
    ifeelsecure: string,
    // PANAS-SF
    interested: string,
    distressed: string,
    excited: string
};