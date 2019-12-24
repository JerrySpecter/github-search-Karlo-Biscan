import Link from 'next/link'

const UserList = ({ data, loading, error }) => {
  if (loading) return <div>Loading...</div>;
  if (data && data.search && data.search.userCount !== 0) {
    console.log('UserList', data)
    // const areMorePosts = data.viewer.repositories.edges.length < data._allPostsMeta.count;
    return (
      <div>
        <ul data-testid="UserList">
          {data.search.edges.map((user, index) => (
            <li key={user.node.id} data-testid="UserListItem">
              <div>
                <Link href={`/profile/${user.node.login}`}>
                  <a>{user.node.login}</a>
                </Link>
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
  return <div>Start typing to find a user...</div>; 
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

export default UserList