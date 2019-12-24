import { withData } from 'next-apollo'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
    credentials: 'same-origin',
})

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('pat_token')

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    }
})

const clientOptions = {
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    'apollographql-client-name': 'react-web-client',
    'apollographql-client-version': '1.3',
    queryDeduplication: false,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
        },
    },
}


export default withData(clientOptions)
