import React, { useRef } from "react";
import { Button, Container, Flex, Text, Title } from "@mantine/core";
import { useLandingPageStyles } from "./useLandingPageStyles";
import { useTranslation } from "react-i18next";
import useIsMobile from "@/common/hooks/useIsMobile";
import Logo from "@/common/components/Logo/Logo";
import Image from "next/image";
import { IconArrowBarToRight } from "@tabler/icons-react";
import useDebouncedRedirect from "@/common/hooks/useDebouncedRedirect";

const LandingPage: React.FC = () => {
  const { classes, cx } = useLandingPageStyles();
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const { debouncedRedirect, redirecting } = useDebouncedRedirect();

  return (
    <Container
      fluid
      className={cx(
        classes.wrapper,
        redirecting ? "animate__animated animate__fadeOut animate__faster" : ""
      )}
    >
      <Image
        src={`/images/landing-page/bg-${isMobile ? "mobile" : "desktop"}.svg`}
        alt=""
        style={{ objectFit: "cover", zIndex: -1 }}
        fill
      />
      <Flex direction="column" justify="center" h="100%">
        <Logo size={isMobile ? 0.25 : 0.5} />
        <Title order={isMobile ? 2 : 1} mt={15}>
          {t("landing.page.heading")}
        </Title>
        <Text c="dimmed">{t("landing.page.heading.caption")}</Text>
        <Button
          mt={15}
          w="max-content"
          variant="light"
          rightIcon={<IconArrowBarToRight />}
          onClick={() => debouncedRedirect("/s")}
        >
          {t("landing.page.button")}
        </Button>
      </Flex>
    </Container>
  );
};

export default LandingPage;
