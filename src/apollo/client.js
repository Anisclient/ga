import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://gql-2.test.serafim.help/v1/graphql',
    headers: {
      'x-hasura-admin-secret': '123-123-123-123-123',
    },
    fetch,
  }),
  cache: new InMemoryCache(),
});
