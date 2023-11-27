import React from "react";
import { Flex, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";

const ParentRegisterAccount: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Flex direction="column" align="center">
      <Title>{t("parent.register.page.heading")}</Title>
    </Flex>
  );
};

export default ParentRegisterAccount;
