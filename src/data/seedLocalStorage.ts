import { casesSeed } from './casesSeed';
import { LOCAL_STORAGE_CASES_KEY, LOCAL_STORAGE_USERS_KEY } from './constants';
import { usersSeed } from './usersSeed';

export const seedLocalStorage = () => {
  if (import.meta.env.MODE === 'development') {
    const existingCases = localStorage.getItem(LOCAL_STORAGE_CASES_KEY);
    if (!existingCases) {
      localStorage.setItem(LOCAL_STORAGE_CASES_KEY, JSON.stringify(casesSeed));
      console.log('✅ Seeded casesData to localStorage');
    } else {
      console.log('ℹ️ casesData already exists in localStorage');
    }

    const existingUsers = localStorage.getItem(LOCAL_STORAGE_USERS_KEY);
    if (!existingUsers) {
      localStorage.setItem(LOCAL_STORAGE_USERS_KEY, JSON.stringify(usersSeed));
      console.log('✅ Seeded usersData to localStorage');
    } else {
      console.log('ℹ️ usersData already exists in localStorage');
    }
  }
};