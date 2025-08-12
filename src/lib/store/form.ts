import { create } from "zustand";

type FormStore = {
  submitForm: (() => void) | null;
  isFormValid: boolean;
  setSubmitForm: (submitFn: () => void) => void;
  setFormValid: (isValid: boolean) => void;
  triggerSubmit: () => void;
};

export const useFormStore = create<FormStore>((set, get) => ({
  submitForm: null,
  isFormValid: false,
  setSubmitForm: (submitFn) => set({ submitForm: submitFn }),
  setFormValid: (isValid) => set({ isFormValid: isValid }),
  triggerSubmit: () => {
    const { submitForm } = get();
    if (submitForm) {
      submitForm();
    }
  },
}));
