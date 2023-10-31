import React from "react";
import { ActionIcon } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { ROUTES } from "@/common/utils/routes";
import Link from "next/link";
import { useSimpleBackIconButtonStyles } from "./useSimpleBackIconButtonStyles";

interface SimpleBackIconButtonProps {
  to: ROUTES;
}

const SimpleBackIconButton: React.FC<SimpleBackIconButtonProps> = ({ to }) => {
  const { classes } = useSimpleBackIconButtonStyles();

  return (
    <Link className={classes.backButton} href={to}>
      <ActionIcon variant="transparent">
        <IconArrowLeft />
      </ActionIcon>
    </Link>
  );
};

export default SimpleBackIconButton;
