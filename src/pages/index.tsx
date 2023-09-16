import Logo from "@/common/components/Logo/Logo";
import { gql, useQuery } from "@apollo/client";
import { NextPage } from "next";

const b = gql`
  query GetCurrentUser {
    GetCurrentUser {
      _id
    }
  }
`;

const Home: React.FC<NextPage> = () => {
  const { error } = useQuery(b);

  return (
    <>
      <Logo></Logo>1 {error?.message}
      <br />2 {error?.networkError?.message}
      <br />3 {error?.graphQLErrors?.map((e) => e.message).join(",")}
      <br />4 {error?.extraInfo}
      <br />5 {error?.cause}
      <br />6 {error?.name}
      <br />7 {error?.protocolErrors?.map((e) => e.message).join(",")}
      <br />8 {error?.stack}
    </>
  );
};

export default Home;
