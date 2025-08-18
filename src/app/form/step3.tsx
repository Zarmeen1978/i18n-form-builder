"use client";
import { Button, Box, Typography, Paper } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/index";
import { resetForm } from "../store/formSlice";
import { useTranslation } from "react-i18next";

export default function Step3({ onBack }: { onBack: () => void }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const formData = useSelector((state: RootState) => state.form);

  const handleSubmit = () => {
    console.log("Final Submitted Data:", formData);
    dispatch(resetForm());
    alert("Form submitted successfully!");
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} mt={3}>
      <Typography variant="h6">{t("form.step3.title")}</Typography>

      <Paper sx={{ p: 2 }}>
        <Typography><b>{t("form.step1.name")}:</b> {formData.name}</Typography>
        <Typography><b>{t("form.step1.email")}:</b> {formData.email}</Typography>
        <Typography><b>{t("form.step1.phone")}:</b> {formData.phone}</Typography>
        <Typography><b>{t("form.step2.country")}:</b> {formData.country}</Typography>
        <Typography><b>{t("form.step2.city")}:</b> {formData.city}</Typography>
        <Typography><b>{t("form.step2.postalCode")}:</b> {formData.postalCode}</Typography>
      </Paper>

      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button variant="outlined" onClick={onBack}>
          {t("form.step3.back")}
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {t("form.step3.submit")}
        </Button>
      </Box>
    </Box>
  );
}
