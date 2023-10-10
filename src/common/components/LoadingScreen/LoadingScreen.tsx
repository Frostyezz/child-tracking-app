import React, { useEffect, useState } from "react";
import { Flex, Title } from "@mantine/core";
import Logo from "../Logo/Logo";
import { useLoadingScreenStyles } from "./useLoadingScreenStyles";

type LoadingScreenProps = {
  isLoading?: boolean;
};

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  const { classes, cx } = useLoadingScreenStyles();
  const [isMounted, setIsMounted] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setIsMounted(true);
    } else {
      setTimeout(() => setIsMounted(false), 1000);
    }
  }, [isLoading]);

  if (!isMounted) return null;

  return (
    <Flex
      className={cx(
        classes.root,
        !isLoading && "animate__animated animate__fadeOut"
      )}
    >
      <Logo
        className={isLoading ? "animate__animated animate__fadeIn" : ""}
        size={1}
      />
    </Flex>
  );
};

export default LoadingScreen;
