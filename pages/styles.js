import styled from '@emotion/styled'

export const SearchField = styled.input`
    padding: 10px 30px;
    font-size: 16px;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    border-radius: 2px;
    border: 1px solid lightgray;
    display: block;
`

export const SearchWrapper = styled.div`
    padding: 50px 0;
`

export const UserListHeader = styled.div`
    max-width: 780px;
    margin: 60px auto 10px;

    h2 {
        display: flex;
        align-items: center;
    }
`

export const TotalUserCount = styled.span`
    color: white;
    background-color: black;
    border-radius: 2px;
    font-size: 10px;
    padding: 5px 10px;
    margin-left: 5px;
`