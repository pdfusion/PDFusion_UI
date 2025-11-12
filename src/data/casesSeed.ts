import { type CaseDataType, defaultCaseData } from '../contexts/CasesDataContext';

export const casesSeed: CaseDataType[] = [
    {
        id: 'pdfn:cases:1',
        patientId: 'pdfn:users:1',
        caseManagerId: 'pdfn:users:2',
        scores: {
            generalFatigueScore: 100,
            physicalFatigueScore: 200,
            reducedActivityScore: 300,
            reducedMotivationScore: 400,
            mentalFatigueScore: 500
        },
        formData: {
            ...defaultCaseData.formData,
            caseId: 'pdfn:cases:1',
            patientId: 'pdfn:users:1',
            caseManagerId: 'pdfn:users:2',
            name: 'Alice Wonder',
            age: '30',
            // MFI
            feelFit: '5',
            physicalAbleLittle: '4',
            feelTired: '2',
            // Legacy/Misc
            feelCalm: '2',
            // Gaming Habits
            gameDevices: ['gameDeviceComputer', 'gameDeviceConsole']
        }
    },
    {
        id: 'pdfn:cases:2',
        patientId: 'pdfn:users:3',
        caseManagerId: 'pdfn:users:4',
        scores: {
            generalFatigueScore: 550,
            physicalFatigueScore: 110,
            reducedActivityScore: 404,
            reducedMotivationScore: 990,
            mentalFatigueScore: 770
        },
        formData: {
            ...defaultCaseData.formData,
            caseId: 'pdfn:cases:2',
            patientId: 'pdfn:users:3',
            caseManagerId: 'pdfn:users:4',
            name: 'Jasmine Patel',
            age: '25',
            // MFI
            feelFit: '2',
            physicalAbleLittle: '3',
            feelTired: '1',
            // Legacy/Misc
            feelCalm: '3',
            // Gaming Habits
            gameDevices: ['gameDeviceComputer'],
            // Example of extra legacy field retained by index signature
            testCheckbox: [
                'option2',
                'option4'
            ]
        }
    },
    {
        id: 'pdfn:cases:3',
        patientId: 'pdfn:users:5',
        caseManagerId: 'pdfn:users:6',
        scores: {
            generalFatigueScore: 101,
            physicalFatigueScore: 202,
            reducedActivityScore: 404,
            reducedMotivationScore: 909,
            mentalFatigueScore: 707
        },
        formData: {
            ...defaultCaseData.formData,
            caseId: 'pdfn:cases:3',
            patientId: 'pdfn:users:5',
            caseManagerId: 'pdfn:users:6',
            name: 'Darius Kim',
            age: '60',
            // MFI
            feelFit: '3',
            physicalAbleLittle: '5',
            feelTired: '2',
            // Legacy/Misc
            feelCalm: '1',
            // Gaming Habits
            gameDevices: ['gameDeviceDoNotPlay'],
            testCheckbox: [
                'option1',
                'option5'
            ]
        }
    }
];