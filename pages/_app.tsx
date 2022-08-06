import type { AppProps } from "next/app";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

import Layout from "../components/Layout/Layout";

const httpLink = createHttpLink({
  uri: "https://gql-technical-assignment.herokuapp.com/graphql",
});
const client = new ApolloClient({ link: httpLink, cache: new InMemoryCache() });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
