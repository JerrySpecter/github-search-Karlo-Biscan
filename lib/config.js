import { gql } from "apollo-boost";

const AUTH_TOKEN = 'ad9e26aec5469e203837457d2010465e0d922526'

const GET_USER_LIST = gql`
    query UserList($query: String!){
        search(query: $query, type: USER, first: 10) {
            userCount
            edges {
                node {
                    ... on User {
                        login
                        name
                        id
                    }
                }
            }
        }
    }
`;

const GET_REPO_LIST = gql`
    query { 
        viewer {
            repositories(first: 10) {
                edges {
                    node {
                        name
                        id
                        url
                    }
                }
            }
        }
    }
`;

const appConfig = {
    AUTH_TOKEN,
    GET_USER_LIST,
    GET_REPO_LIST
}

export default appConfig