import type { UserDataType } from "../contexts/UsersDataContext";

export const usersSeed: UserDataType[] = [
    {
        id: 'pdfn:users:1',
        name: 'Alice Wonder',
        firstName: 'Alice',
        lastName: 'Wonder',
        age: '45',
        email: 'test@pdfexample.com',
        role: 'patient'
    },
    {
        id: 'pdfn:users:2',
        name: 'Marcus Lane',
        firstName: 'Marcus',
        lastName: 'Lane',
        age: '42',
        email: 'test2@pdfexample.com',
        role: 'caseManager'
    },
    {
        id: 'pdfn:users:3',
        name: 'Jasmine Patel',
        firstName: 'Jasmine',
        lastName: 'Patel',
        age: '59',
        email: 'test3@pdfexample.com',
        role: 'patient'
    },
    {
        id: 'pdfn:users:4',
        name: 'Brook Brooks',
        firstName: 'Brook',
        lastName: 'Brooks',
        age: '32',
        email: 'test2@pdfexample.com',
        role: 'caseManager'
    },
    {
        id: 'pdfn:users:5',
        name: 'Darius Kim',
        firstName: 'Darius',
        lastName: 'Kim',
        age: '52',
        email: 'test2@pdfexample.com',
        role: 'patient'
    },
    {
        id: 'pdfn:users:6',
        name: 'Sofia Nguyen',
        firstName: 'Sofia',
        lastName: 'Nguyen',
        age: '35',
        email: 'test2@pdfexample.com',
        role: 'caseManager'
    }
]