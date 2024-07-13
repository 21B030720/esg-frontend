import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import s from "./LocalizationButton.module.css"


export default function LocalizationButton() {

    const { t, i18n } = useTranslation();

    const setLocale = (lng) => {
        i18n.changeLanguage(lng);
    };

    const getLocaleLabel = (lng) => {
        switch (lng) {
        case "ru":
            return t("ru_locale");
        case "en":
            return t("en_locale");
        case "kk":
            return t("kk_locale");
        default:
            return "";
        }
    };


  return (
    <>
    <div className={s.dropdown}>
      <button className={s.languageButton}>
        {getLocaleLabel(i18n.language)}
      </button>
      <div className={s.dropdown_content}>
        {i18n.languages.map((lng, index) => (
          <button key={index} onClick={() => setLocale(lng)}>
            {getLocaleLabel(lng)}
          </button>
        ))}
      </div>
    </div>
    </>
    
  );
}

