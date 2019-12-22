import { withData } from "next-apollo";
import { HttpLink } from "apollo-boost";
import { InMemoryCache } from 'apollo-cache-inmemory';

const config = {
  link: new HttpLink({
    uri: "https://api.github.com/graphql", // Server URL (must be absolute)
    credentials: "same-origin",
    headers: {
      authorization: 'Bearer 03fe49384c11aa20de61d63b821bc91783781f4f'
    } // Additional fetch() options like `credentials` or `headers`
  }),
  cache: new InMemoryCache(),
  'apollographql-client-name': 'react-web-client',
  'apollographql-client-version': '1.3'
};

export default withData(config);

// import { ApolloClient } from 'apollo-client';
// import { createHttpLink } from 'apollo-link-http';
// import { setContext } from 'apollo-link-context';

// const httpLink = createHttpLink({
//   uri: 'https://api.github.com/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
// //   const token = localStorage.getItem('token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: 'Bearer 03fe49384c11aa20de61d63b821bc91783781f4f'
//     }
//   }
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
//   name: 'react-web-client',
//   version: '1.3',
// });

// console.log(client)

// export default withData(client);