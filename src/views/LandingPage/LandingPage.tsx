import LoadingScreen from "@/common/components/LoadingScreen/LoadingScreen";
import React from "react";

const LandingPage: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(!isLoading);
    }, 3000);
    return () => clearInterval(interval);
  }, [isLoading]);

  return <LoadingScreen isLoading={isLoading} />;
};

export default LandingPage;
