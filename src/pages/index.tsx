import LoadingScreen from "@/common/components/LoadingScreen/LoadingScreen";
import LandingPage from "@/views/LandingPage/LandingPage";
import { NextPage } from "next";
import dynamic from "next/dynamic";

// const LandingPage = dynamic(() => import("@/views/LandingPage/LandingPage"), {
//   loading: () => <LoadingScreen isLoading />,
//   ssr: false,
// });

const Home: React.FC<NextPage> = () => {
  return <LandingPage />;
};

export default Home;
