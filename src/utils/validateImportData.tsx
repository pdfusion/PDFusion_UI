import type { CaseDataType } from "../contexts/CasesDataContext";
import type { UserDataType } from "../contexts/UsersDataContext";
import { LOCAL_STORAGE_CASES_KEY, LOCAL_STORAGE_USERS_KEY } from "../data/constants";

export interface IPDImportFile {
  [key: string]: any,
  [LOCAL_STORAGE_CASES_KEY]?: CaseDataType[],
  [LOCAL_STORAGE_USERS_KEY]?: UserDataType[]
}

function validateCases(data: any) {
  return (
    Array.isArray(data[LOCAL_STORAGE_CASES_KEY]) &&
      data[LOCAL_STORAGE_CASES_KEY].every((caseItem) =>
        typeof caseItem.id === 'string' &&
        typeof caseItem.patientId === 'string' &&
        typeof caseItem.caseManagerId === 'string' &&
        typeof caseItem.formData === 'object' &&
        typeof caseItem.formData.patientId === 'string' &&
        typeof caseItem.formData.caseManagerId === 'string' &&
        typeof caseItem.formData.name === 'string' &&
        typeof caseItem.formData.age === 'string' &&
        typeof caseItem.formData.feelFit === 'string' &&
        typeof caseItem.formData.feelCalm === 'string' &&
        Array.isArray(caseItem.formData.gameDevices)
      )
  );
}

function validateUsers(data: any) {
  return (
    Array.isArray(data[LOCAL_STORAGE_USERS_KEY]) &&
    data[LOCAL_STORAGE_USERS_KEY].every((user) =>
      typeof user.id === 'string' &&
      typeof user.name === 'string' &&
      typeof user.firstName === 'string' &&
      typeof user.lastName === 'string' &&
      typeof user.email === 'string' &&
      typeof user.age === 'string' &&
      ['patient', 'caseManager', 'admin', ''].includes(user.role)
    )
  );
}

export const isValidImportData = (data: any, importType: string): data is IPDImportFile => {
  if (importType === "set") {
    return (
      validateCases(data) &&
      validateUsers(data)
    );
  } else if (importType === "merge")
    return (
      validateCases(data)
    );
  else {
    return false;
  }
};