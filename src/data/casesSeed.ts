import { type CaseDataType } from '../contexts/CasesDataContext';

export const casesSeed: CaseDataType[] = [
    {
        id: 'pdfn:cases:1',
        patientId: 'pdfn:users:1',
        caseManagerId: 'pdfn:users:2',
        formData: {
            patientId: 'pdfn:users:1',
            caseManagerId: 'pdfn:users:2',
            name: 'Alice Wonder',
            age: '30',
            feelFit: '5',
            feelCalm: "2",
            gameDevices: ['gameDeviceComputer', 'gameDeviceConsole']
        }
    },
    {
        id: 'pdfn:cases:2',
        patientId: 'pdfn:users:3',
        caseManagerId: 'pdfn:users:4',
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
            testCheckbox: [
                "option1",
                "option5"
            ]
        }
    }
];