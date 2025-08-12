import api from "@/api";

type CreateCustomerRequest = {
  name: string;
  email: string;
  address: string;
  code: string;
  unit?: string;
  items: {
    id: number;
    imageUri: string;
    title: string;
    unit: number;
    price: number;
    type: string;
  }[];
  total: number;
};

export const createCustomer = async (data: CreateCustomerRequest) => {
  try {
    const res = await api.post("", JSON.stringify(data));
    return res;
  } catch (error) {
    throw error;
  }
};
