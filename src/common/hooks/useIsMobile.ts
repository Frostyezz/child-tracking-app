import { useMediaQuery } from "@mantine/hooks";

const useIsMobile = () => {
  const isDesktop = useMediaQuery("(min-width: 56.25em)");

  return !isDesktop;
};

export default useIsMobile;
