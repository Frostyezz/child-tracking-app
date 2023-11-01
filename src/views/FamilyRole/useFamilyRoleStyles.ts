import { createStyles, rem } from "@mantine/core";

export const useFamilyRoleStyles = createStyles((theme) => ({
  role: {
    transition: "border 0.5s ease",
    borderBottom: "6px solid transparent",
    ":hover": {
      borderBottom: "6px solid #868e96",
    },
    [theme.fn.smallerThan("sm")]: {
      ":hover": {
        borderBottom: "6px solid transparent",
      },
    },
  },
  roleActive: {
    borderBottom: `6px solid ${theme.colors.blue[5]} !important`,
  },
  title: {
    fontSize: rem(32),
    fontWeight: 500,
    animation: "fadeInUp 0.5s ease-in-out 0.4s both",
    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(26),
      fontWeight: 500,
    },
  },
  caption: {
    animation: "fadeInUp 0.5s ease-in-out 0.7s both",
  },
  button: {
    transition: "opacity 0.3s ease",
  },
}));
