import React, { useState } from 'react'
import UserList from '../../components/UserList/index'
import withData from "../../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const POSTS_PER_PAGE = 10;

const Search = (props) => {
    const [searchString, setSearchString] = useState('');

    const GET_POSTS = gql`
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
    
    const { loading, error, data, fetchMore } = useQuery(GET_POSTS, {
        variables: { skip: 0, first: POSTS_PER_PAGE, query: `${searchString} in:login` }
    })

    return (
        <div className="container">
            <p>Search for users:</p>
            <input type="text" value={searchString} onChange={e => setSearchString(e.target.value)}/>

            <UserList data={data} loading={loading} error={error}/>
        </div>
    )
}

export default withData(Search)