export interface IUserForm {
    firstName: string,
    lastName: string,
    email: string,
    age: string,
    role: 'patient' | 'caseManager' | 'admin' | ''
};