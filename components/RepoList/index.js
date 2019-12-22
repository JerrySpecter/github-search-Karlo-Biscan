import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const POSTS_PER_PAGE = 10;

const GET_POSTS = gql`
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

function RepoList() {
  const { loading, error, data, fetchMore } = useQuery(GET_POSTS, {
    variables: { skip: 0, first: POSTS_PER_PAGE }
  });

  if (data && data.viewer) {
    console.log(data)
    // const areMorePosts = data.viewer.repositories.edges.length < data._allPostsMeta.count;
    return (
      <div>
        <ul data-testid="RepoList">
          {data.viewer.repositories.edges.map((repository, index) => (
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
    );
  }
  return <div>Loading...</div>;
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

export default RepoList;