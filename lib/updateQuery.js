const onFetchMore = (updateQuery, variables) => {
    updateQuery({
        variables,
        updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) return previousResult

            return {
                ...fetchMoreResult
            }
        },
    })
}

export default onFetchMore