import React, { createContext, useState, type ReactNode } from 'react';

type CasesDataType = {
  value: string;
  setValue: (newValue: string) => void;
};

export const CasesDataContext = createContext<CasesDataType | undefined>(undefined);

type CasesDataProviderProps = {
    children: ReactNode;
};

export const CasesDataProvider = ({ children }: CasesDataProviderProps) => {
    const [value, setValue] = useState<string>('initial');
    
    return (
        <CasesDataContext.Provider value={{ value, setValue }}>
            {children}
        </CasesDataContext.Provider>
    );
};