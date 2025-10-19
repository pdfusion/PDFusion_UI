import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { usersSeed } from '../data/usersSeed';
import { LOCAL_STORAGE_USERS_KEY } from '../data/constants';

export type UserDataType = {
    id: string,
    name: string,
    firstName: string,
    lastName: string,
    email: string,
    age: string,
    role: 'patient' | 'caseManager' | 'admin' | ''
};

export type UsersDataContextType = {
  usersData: UserDataType[];
  setUsersData: React.Dispatch<React.SetStateAction<UserDataType[]>>;
};

export const defaultUserData: UserDataType = {
    id: '',
    name: '',
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    role: ''
};

export const UsersDataContext = createContext<UsersDataContextType | undefined>(undefined);

export const UsersDataProvider = ({ children }: { children: ReactNode }) => {
  const [usersData, setUsersData] = useState<UserDataType[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_USERS_KEY);
      return stored ? JSON.parse(stored) : usersSeed;
    } catch (error) {
      console.error('Failed to load users from localStorage:', error);
      return [defaultUserData];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_USERS_KEY, JSON.stringify(usersData));
    } catch (error) {
      console.error('Failed to save users to localStorage:', error);
    }
  }, [usersData]);

  return (
    <UsersDataContext.Provider value={{ usersData, setUsersData }}>
      {children}
    </UsersDataContext.Provider>
  );
};

export const useUsersData = () => {
  const context = useContext(UsersDataContext);
  if (!context) {
    throw new Error('useUsersData must be used within a UsersDataProvider');
  }
  return context;
};