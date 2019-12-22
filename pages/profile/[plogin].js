import React, { useState } from 'react'
import UserList from '../../components/UserList/index'
import withData from "../../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useRouter } from 'next/router'
import BackButton from '../../components/BackButton/index'


const Search = (props) => {
    const router = useRouter()
    const { plogin } = router.query

    const GET_POSTS = gql`
        query ProfilePage($login: String!) {
            user(login: $login) {
                id
                email
                createdAt
                company
                bio
                avatarUrl
                name
                login
                repositories(first: 10) {
                    edges {
                        node {
                            id
                            name
                            url
                        }
                    }
                }
            }
        }
    `;

    const { loading, error, data, fetchMore } = useQuery(GET_POSTS, {
        variables: { login: plogin }
    });

    if (error) return <div>Error {error}</div>;
    if (loading) return <div>Loading...</div>;
    if (data && data.user) {
        console.log(data)

        return (
        <div>
            <BackButton />
            <h2>{data.user.login}</h2>
            <h4>{data.user.login}</h4>

            <p>Repository list</p>
            <ul data-testid="RepoList">
                {data.user.repositories.edges.map((repo, index) => (
                    <li key={repo.node.id} data-testid="RepoListItem">
                        {repo.node.name}
                    </li>
                ))}
            </ul>
        </div>
        );
    }
}

export default withData(Search)