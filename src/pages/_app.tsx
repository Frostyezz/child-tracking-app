import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Poppins } from "@next/font/google";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "@/store";
import { ApolloProvider } from "@apollo/client";
import client from "@/common/apollo";
import "@/common/i18next";
import "animate.css";
import RouterTransition from "@/common/components/RouterTransition/RouterTransition";

const poppins = Poppins({
  preload: true,
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "800", "900"],
});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              fontFamily: poppins.style.fontFamily,
              headings: { fontFamily: poppins.style.fontFamily },
              colorScheme: "light",
            }}
          >
            <RouterTransition />
            <Component {...pageProps} />
          </MantineProvider>
        </Provider>
      </ApolloProvider>
    </>
  );
}
