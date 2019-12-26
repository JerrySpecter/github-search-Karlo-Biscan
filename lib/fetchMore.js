const onFetchMore = (fetchMore, currentCount, loadMoreCount) => {
    fetchMore({
        variables: { first: currentCount + loadMoreCount},
        updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) return previousResult

            return {
                ...fetchMoreResult
            }
        },
    })
}

export default onFetchMore