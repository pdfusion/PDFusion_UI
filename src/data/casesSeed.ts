import { type CaseDataType } from '../contexts/CasesDataContext';

export const casesSeed: CaseDataType[] = [
    {
        id: 'pdfn:cases:1',
        patientId: 'pdfn:users:1',
        caseManagerId: 'pfn:users:2',
        formData: {
            patientId: 'pdfn:users:1',
            caseManagerId: 'pfn:users:2',
            name: 'Alice Wonder',
            age: '30',
            feelsFit: '5',
            gameDevices: ['gameDeviceComputer', 'gameDeviceConsole']
        }
    },
    {
        id: 'pdfn:cases:2',
        patientId: 'pdfn:users:3',
        caseManagerId: 'pfn:users:4',
        formData: {
            patientId: 'pdfn:users:3',
            caseManagerId: 'pfn:users:4',
            name: "Jasmine Patel",
            age: "25",
            feelsFit: "2",
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
        caseManagerId: 'pfn:users:6',
        formData: {
            patientId: 'pdfn:users:5',
            caseManagerId: 'pfn:users:6',
            name: "Darius Kim",
            age: "60",
            feelsFit: "3",
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