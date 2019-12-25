import { gql } from 'apollo-boost'

export const AUTH_TOKEN = 'ad9e26aec5469e203837457d2010465e0d922526'
export const USERS_PER_LOAD = 8
export const REPOS_PER_LOAD = 4

export const repoSortingData = [
    'CREATED_AT',
    'UPDATED_AT',
    'PUSHED_AT',
    'NAME',
    'STARGAZERS'
]

export const GET_USER_LIST = gql`
    query UserList($query: String!, $first: Int!){
        search(query: $query, type: USER, first: $first) {
            userCount
            edges {
                node {
                    ... on User {
                        login
                        name
                        id
                        location
                        avatarUrl
                      	bio
                        email
                        url
                    }
                }
            }
        }
    }
`

export const GET_PROFILE = gql`
    query ProfilePage($login: String!, $first: Int!, $order: RepositoryOrder) {
        user(login: $login) {
            id
            email
            createdAt
            company
            bio
            avatarUrl
            name
            login
            repositories(first: $first, orderBy: $order) {
                totalCount
                edges {
                    node {
                        id
                        name
                        url
                        description
                        languages(first: 2) {
                            totalCount
                            edges {
                                node {
                                    id
                                    name
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

