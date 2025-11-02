import type { IQuestionnaireFormData } from '../../pages/IQuestionnaire';

interface IMFIKeyValue {
    [key: string]: number
}
interface IMFIKey {
    [key: string]: IMFIKeyValue
}

export const MFIScoreKey: IMFIKey = {
    // Indicative items.
    "physicalAbleLittle": {
        "1": 5,
        "2": 4,
        "3": 3,
        "4": 2,
        "5": 1
    },
    "feelTired": {
        "1": 5,
        "2": 4,
        "3": 3,
        "4": 2,
        "5": 1
    },
    "dreadThings": {
        "1": 5,
        "2": 4,
        "3": 3,
        "4": 2,
        "5": 1
    },
    "doLittleDay": {
        "1": 5,
        "2": 4,
        "3": 3,
        "4": 2,
        "5": 1
    },
    "effortConcentrate": {
        "1": 5,
        "2": 4,
        "3": 3,
        "4": 2,
        "5": 1
    },
    "physicalBadCondition": {
        "1": 5,
        "2": 4,
        "3": 3,
        "4": 2,
        "5": 1
    },
    "easilyTire": {
        "1": 5,
        "2": 4,
        "3": 3,
        "4": 2,
        "5": 1
    },
    "getLittleDone": {
        "1": 5,
        "2": 4,
        "3": 3,
        "4": 2,
        "5": 1
    },
    "feelDoNothing": {
        "1": 5,
        "2": 4,
        "3": 3,
        "4": 2,
        "5": 1
    },
    "thoughtsWander": {
        "1": 5,
        "2": 4,
        "3": 3,
        "4": 2,
        "5": 1
    },
    // Contra-indicative items
    "feelFit": {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5
    },
    "feelActive": {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5
    },
    "doLotDay": {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5
    },
    "keepFocus": {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5
    },
    "physicalTakeLot": {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5
    },
    "physicalExcellentCondition": {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5
    },
    "feelDoNiceThings": {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5
    },
    "haveLotPlans": {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5
    },
    "concentrateWell": {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5
    }
};

export function calcMFIScore(mfiKeys: string[], formData: IQuestionnaireFormData): number {
    let totalScore = 0;

    mfiKeys.forEach((mfiKey: string) => {
        const formRes = formData[mfiKey];
        if (typeof formRes === "string" && MFIScoreKey[mfiKey][formRes]) {
            const mappedValue = MFIScoreKey[mfiKey][formRes];
            totalScore += mappedValue;
        }
    });

    return totalScore;
}

export const calcMFIGeneralFatigueScore = (formData: IQuestionnaireFormData) => calcMFIScore([
    "feelFit",
    "feelTired",
    "rested",
    "easilyTire"
], formData);

export const calcMFIPhysicalFatigueScore = (formData: IQuestionnaireFormData) => calcMFIScore([
    "physicalAbleLittle",
    "physicalTakeLot",
    "physicalBadCondition",
    "physicalExcellentCondition"
], formData);

export const calcMFIReducedActivityScore = (formData: IQuestionnaireFormData) => calcMFIScore([
    "feelActive",
    "doLotDay",
    "doLittleDay",
    "getLittleDone"
], formData);

export const calcMFIReducedModivationScore = (formData: IQuestionnaireFormData) => calcMFIScore([
    "feelDoNiceThings",
    "dreadThings",
    "haveLotPlans",
    "feelDoNothing"
], formData);

export const calcMFIMentalFatigueScore = (formData: IQuestionnaireFormData) => calcMFIScore([
    "keepFocus",
    "concentrateWell",
    "effortConcentrate",
    "thoughtsWander"
], formData);