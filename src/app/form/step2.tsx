"use client";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import { Button, Box } from "@mui/material";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { updateForm } from "../store/formSlice";
import { useTranslation } from "react-i18next";

const validationSchema = Yup.object({
  country: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  postalCode: Yup.string()
    .matches(/^[0-9]+$/, "Must be a number")
    .required("Required"),
});

export default function Step2({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{ country: "", city: "", postalCode: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(updateForm(values));
        onNext();
      }}
    >
      {() => (
        <Form>
          <Box display="flex" flexDirection="column" gap={2} mt={2}>
            <Field
              component={TextField}
              name="country"
              label={t("form.step2.country")}
            />
            <Field
              component={TextField}
              name="city"
              label={t("form.step2.city")}
            />
            <Field
              component={TextField}
              name="postalCode"
              label={t("form.step2.postalCode")}
            />

            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button variant="outlined" onClick={onBack}>
                {t("form.step3.back")}
              </Button>
              <Button type="submit" variant="contained">
                {t("form.step3.next")}
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
