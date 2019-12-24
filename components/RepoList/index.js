import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import appConfig from '../../lib/config'

const POSTS_PER_PAGE = 10

function RepoList() {
    const { data } = useQuery(appConfig.GET_REPO_LIST, {
        variables: { skip: 0, first: POSTS_PER_PAGE },
    })

    if (data && data.viewer) {
        // const areMorePosts = data.viewer.repositories.edges.length < data._allPostsMeta.count;
        return (
            <div>
                <ul data-testid="RepoList">
                    {data.viewer.repositories.edges.map((repository) => (
                        <li key={repository.node.id} data-testid="RepoListItem">
                            <div>
                                <a href={repository.node.url}>{repository.node.name}</a>
                            </div>
                        </li>
                    ))}
                </ul>
                {/* {areMorePosts ? (
          <button onClick={() => loadMorePosts(data, fetchMore)}>
            {loading ? "Loading..." : "Show More"}
          </button>
        ) : (
          ""
        )} */}
            </div>
        )
    }
    return <div>Loading...</div>
}

// function loadMorePosts(data, fetchMore) {
//   return fetchMore({
//     variables: {
//       skip: data.allPosts.length
//     },
//     updateQuery: (previousResult, { fetchMoreResult }) => {
//       if (!fetchMoreResult) {
//         return previousResult;
//       }
//       return Object.assign({}, previousResult, {
//         // Append the new posts results to the old one
//         allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
//       });
//     }
//   });
// }

export default RepoList
