import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

import {production} from 'src/env'
export const baseURL = production ? 'https://backend.724voip.net/graphql' : "http://localhost:1337/graphql" 

export const gqlClient = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:1337/graphql", // change to your backend URL
  }),
  cache: new InMemoryCache(),
});
