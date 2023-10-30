import { ROUTES } from "@/common/utils/routes";
import { createStyles, Container, Group, ActionIcon, rem } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Logo from "../Logo/Logo";

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    marginLeft: "auto",
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

const AppFooter: React.FC = () => {
  const { classes } = useStyles();
  const isMobile = useMediaQuery("(max-width: 800px)");
  const router = useRouter();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Link href={ROUTES.ROOT}>
          <Logo size={0.35} />
        </Link>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <a href="https://github.com/Frostyezz">
            <ActionIcon size="xl">
              <IconBrandGithub size="1.5rem" />
            </ActionIcon>
          </a>
          <a href="https://www.linkedin.com/in/robert-moraru-5801b01a7">
            <ActionIcon size="xl">
              <IconBrandLinkedin size="1.5rem" />
            </ActionIcon>
          </a>
          <a href="https://www.youtube.com/channel/UCdx8wxQb3vD18WQFZjdU5Cg">
            <ActionIcon size="xl">
              <IconBrandYoutube size="1.5rem" />
            </ActionIcon>
          </a>
        </Group>
      </Container>
    </div>
  );
};

export default AppFooter;
