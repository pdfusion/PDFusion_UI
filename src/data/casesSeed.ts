import { type CaseDataType } from '../contexts/CasesDataContext';

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
            patientId: 'pdfn:users:1',
            caseManagerId: 'pdfn:users:2',
            name: 'Alice Wonder',
            age: '30',
            feelFit: '5',
            feelCalm: "2",
            gameDevices: ['gameDeviceComputer', 'gameDeviceConsole'],
            physicalAbleLittle: '4',
            feelTired: '2'
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
            patientId: 'pdfn:users:3',
            caseManagerId: 'pdfn:users:4',
            name: "Jasmine Patel",
            age: "25",
            feelFit: "2",
            feelCalm: "3",
            gameDevices: [
                "gameDeviceComputer"
            ],
            physicalAbleLittle: '3',
            feelTired: '1',
            testCheckbox: [
                "option2",
                "option4"
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
            patientId: 'pdfn:users:5',
            caseManagerId: 'pdfn:users:6',
            name: "Darius Kim",
            age: "60",
            feelFit: "3",
            feelCalm: "1",
            gameDevices: [
                "gameDeviceDoNotPlay"
            ],
            physicalAbleLittle: '5',
            feelTired: '2',
            testCheckbox: [
                "option1",
                "option5"
            ]
        }
    }
];