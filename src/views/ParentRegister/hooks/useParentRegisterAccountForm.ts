import React from "react";
import validator from "validator";
import { useForm } from "@mantine/form";
import { useTranslation } from "react-i18next";
import { User } from "@/graphql/schemas/user.schema";
import { LANGUAGE } from "@/graphql/types/enums";

const useParentRegisterAccountForm = () => {
  const { t } = useTranslation();

  const form = useForm<Partial<User>>({
    initialValues: {
      email: "",
      password: "",
      language: LANGUAGE.en,
    },
    validateInputOnBlur: true,
    validate: {
      email: (value: User["email"]) => {
        if (!value || validator.isEmpty(value))
          return t("register.error.email.required");
        return validator.isEmail(value)
          ? undefined
          : t("register.error.email.isEmail");
      },
      password: (value) => {
        if (!value || validator.isEmpty(value))
          return t("register.error.password.required");
        return validator.isStrongPassword(value, { minLength: 6 })
          ? undefined
          : t("register.error.email.passwordTooWeak");
      },
      language: (value) =>
        !value || validator.isEmpty(value)
          ? t("register.error.language.required")
          : undefined,
    },
  });
};

export default useParentRegisterAccountForm;
