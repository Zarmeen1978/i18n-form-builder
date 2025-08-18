"use client";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <Button variant="outlined" onClick={toggleLanguage}>
      {i18n.language === "en" ? "العربية" : "English"}
    </Button>
  );
}
