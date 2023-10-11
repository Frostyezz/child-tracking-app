import { useCallback, useState } from "react";
import { useRouter } from "next/router";

const useDebouncedRedirect = () => {
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(false);

  const debouncedRedirect = useCallback((path: string, ms?: number) => {
    setRedirecting(true);
    setTimeout(() => {
      router.push(path);
    }, ms ?? 500);
  }, []);

  return { debouncedRedirect, redirecting };
};

export default useDebouncedRedirect;
