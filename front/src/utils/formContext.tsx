'use client'
import { createContext, useState } from "react";

interface IFormContext {
  section: string,
  setSection: React.Dispatch<React.SetStateAction<string>>
}

interface IProviderProps {
  children: React.ReactNode
}


const FormContext = createContext<IFormContext | undefined>(undefined);

export const FormProvider: React.FC<IProviderProps> = ({ children }) => {
  const [section, setSection] = useState<string>('macerated');

  return (
    <FormContext.Provider value={{ section, setSection }}>
      {children}
    </FormContext.Provider>
  )
};

export default FormContext;

