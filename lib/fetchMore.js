const onFetchMore = (fetchMore, currentCount, loadMoreCount) => {
    fetchMore({
        variables: { first: currentCount + loadMoreCount},
        updateQuery: (previousResult, { fetchMoreResult, variables }) => {
            if (!fetchMoreResult) return previousResult;

            return {
                ...fetchMoreResult
            };
        },
    });
}

export default onFetchMore