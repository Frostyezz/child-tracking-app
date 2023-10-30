import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Be_Vietnam_Pro } from "@next/font/google";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "@/store";
import { ApolloProvider } from "@apollo/client";
import client from "@/common/apollo";
import "@/common/i18next";
import "animate.css";
import RouterTransition from "@/common/components/RouterTransition/RouterTransition";
import AppLayout from "@/common/components/AppLayout/AppLayout";

const font = Be_Vietnam_Pro({
  preload: true,
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Safemode</title>
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
              fontFamily: font.style.fontFamily,
              headings: { fontFamily: font.style.fontFamily },
              colorScheme: "light",
            }}
          >
            <RouterTransition />
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </MantineProvider>
        </Provider>
      </ApolloProvider>
    </>
  );
}
