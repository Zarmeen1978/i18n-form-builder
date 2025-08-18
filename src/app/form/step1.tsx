"use client";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import { Button, Box } from "@mui/material";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { updateForm } from "../store/formSlice";
import { useTranslation } from "react-i18next";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid").required("Required"),
  phone: Yup.string().required("Required"),
});

export default function Step1({ onNext }: { onNext: () => void }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(updateForm(values));
        onNext();
      }}
    >
      {() => (
        <Form>
          <Box display="flex" flexDirection="column" gap={2} mt={2}>
            <Field component={TextField} name="name" label={t("form.step1.name")} />
            <Field component={TextField} name="email" label={t("form.step1.email")} />
            <Field component={TextField} name="phone" label={t("form.step1.phone")} />
            <Button type="submit" variant="contained">
              {t("form.step3.next")}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
