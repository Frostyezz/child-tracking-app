import React, { useMemo, useState } from "react";
import { Flex, Text, Title } from "@mantine/core";
import Image from "next/image";
import useIsMobile from "@/common/hooks/useIsMobile";
import { useTranslation } from "react-i18next";
import { useFamilyRoleStyles } from "./useFamilyRoleStyles";
import SimpleBackIconButton from "@/common/components/SimpleBackIconButton/SimpleBackIconButton";
import { ROUTES } from "@/common/utils/routes";

enum ROLE {
  MOM = "mom",
  CHILD = "child",
  DAD = "dad",
}

const FamilyRole: React.FC = () => {
  const [role, setRole] = useState<ROLE | null>(null);
  const isMobile = useIsMobile();
  const imageRatio = useMemo(() => (isMobile ? 0.5 : 0.75), [isMobile]);
  const { t } = useTranslation();
  const { classes, cx } = useFamilyRoleStyles();

  return (
    <Flex direction="column" justify="center" align="center" h="100%">
      <SimpleBackIconButton to={ROUTES.ROOT} />
      <Flex className="animate__animated animate__fadeIn">
        <Image
          onClick={() => setRole(role === ROLE.MOM ? null : ROLE.MOM)}
          className={cx(classes.role, role === ROLE.MOM && classes.roleActive)}
          src="/images/family-role/mother.png"
          width={149 * imageRatio}
          height={472 * imageRatio}
          alt=""
        />
        <Image
          onClick={() => setRole(role === ROLE.CHILD ? null : ROLE.CHILD)}
          className={cx(
            classes.role,
            role === ROLE.CHILD && classes.roleActive
          )}
          src="/images/family-role/child.png"
          width={113 * imageRatio}
          height={472 * imageRatio}
          alt=""
        />
        <Image
          onClick={() => setRole(role === ROLE.DAD ? null : ROLE.DAD)}
          className={cx(classes.role, role === ROLE.DAD && classes.roleActive)}
          src="/images/family-role/father.png"
          width={188 * imageRatio}
          height={472 * imageRatio}
          alt=""
        />
      </Flex>
      <Flex className="animate__animated animate__fadeIn">
        <Text
          ta="center"
          w={149 * imageRatio}
          c={role === ROLE.MOM ? "#339af0" : "dimmed"}
          fw={role === ROLE.MOM ? 700 : 400}
          style={{ transition: "color 0.3s" }}
        >
          {t("family.role.page.mom")}
        </Text>
        <Text
          ta="center"
          w={113 * imageRatio}
          c={role === ROLE.CHILD ? "#339af0" : "dimmed"}
          fw={role === ROLE.CHILD ? 700 : 400}
          style={{ transition: "color 0.3s" }}
        >
          {t("family.role.page.child")}
        </Text>
        <Text
          ta="center"
          w={188 * imageRatio}
          c={role === ROLE.DAD ? "#339af0" : "dimmed"}
          fw={role === ROLE.DAD ? 700 : 400}
          style={{ transition: "color 0.3s" }}
        >
          {t("family.role.page.dad")}
        </Text>
      </Flex>
      <Flex w="90%" ta="center" direction="column" mt={30}>
        <Title className={cx(classes.title)}>
          {t("family.role.page.heading")}
        </Title>
        <Text className={classes.caption} mt={15} c="dimmed">
          {t(`family.role.page.caption.${isMobile ? "mobile" : "desktop"}`)}
        </Text>
      </Flex>
    </Flex>
  );
};

export default FamilyRole;
