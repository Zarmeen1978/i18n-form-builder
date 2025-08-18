import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  postalCode: string;
}

const initialState: FormData = {
  name: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  postalCode: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<Partial<FormData>>) => {
      return { ...state, ...action.payload };
    },
    resetForm: () => initialState,
  },
});

export const { updateForm, resetForm } = formSlice.actions;
export default formSlice.reducer;
