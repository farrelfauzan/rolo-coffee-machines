"use client";

import { createContext, useContext, ReactNode } from 'react';

type FormContextType = {
  submitForm: () => void;
  setSubmitForm: (submitFn: () => void) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within FormProvider');
  }
  return context;
};

type FormProviderProps = {
  children: ReactNode;
};

export const FormProvider = ({ children }: FormProviderProps) => {
  let submitFormRef: (() => void) | null = null;

  const submitForm = () => {
    if (submitFormRef) {
      submitFormRef();
    }
  };

  const setSubmitForm = (submitFn: () => void) => {
    submitFormRef = submitFn;
  };

  return (
    <FormContext.Provider value={{ submitForm, setSubmitForm }}>
      {children}
    </FormContext.Provider>
  );
};
