import { type CaseDataType } from '../contexts/CasesDataContext';

export const casesSeed: CaseDataType[] = [
    {
        id: 'pdfn:cases:1',
        userId: 'pdfn:users:1',
        formData: {
            caseId: 'pdfn:cases:1',
            userId: 'pdfn:users:1',
            name: 'Alice',
            age: '30',
            feelsFit: '5',
            gameDevices: ['gameDeviceComputer', 'gameDeviceConsole']
        }
    },
    {
        id: 'pdfn:cases:2',
        userId: 'pdfn:users:2',
        formData: {
            caseId: 'pdfn:cases:2',
            userId: 'pdfn:users:2',
            "name": "Bob",
            "age": "25",
            "feelsFit": "2",
            "gameDevices": [
                "gameDeviceComputer"
            ],
            "testCheckbox": [
                "option2",
                "option4"
            ]
        }
    },
    {
        id: 'pdfn:cases:3',
        userId: 'pdfn:users:3',
        formData: {
            caseId: 'pdfn:cases:3',
            userId: 'pdfn:users:3',
            "name": "James",
            "age": "60",
            "feelsFit": "3",
            "gameDevices": [
                "gameDeviceDoNotPlay"
            ],
            "testCheckbox": [
                "option1",
                "option5"
            ]
        }
    }
];