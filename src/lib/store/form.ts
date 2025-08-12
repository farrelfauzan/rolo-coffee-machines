import { create } from "zustand";

type FormStore = {
  submitForm: (() => void) | null;
  isFormValid: boolean;
  setSubmitForm: (submitFn: () => void) => void;
  setFormValid: (isValid: boolean) => void;
  triggerSubmit: () => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export const useFormStore = create<FormStore>((set, get) => ({
  submitForm: null,
  isFormValid: false,
  isLoading: false,
  setSubmitForm: (submitFn) => set({ submitForm: submitFn }),
  setFormValid: (isValid) => set({ isFormValid: isValid }),
  setIsLoading: (isLoading) => set({ isLoading }),
  triggerSubmit: () => {
    const { submitForm } = get();
    if (submitForm) {
      submitForm();
    }
  },
}));
