import styled from '@emotion/styled'

export const ProfileStateMsg = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RepoListHeader = styled.div`
    max-width: 780px;
    margin: 60px auto 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
        display: flex;
        align-items: center;
    }
`

export const TotalRepoCount = styled.span`
    color: white;
    background-color: black;
    border-radius: 2px;
    font-size: 10px;
    padding: 5px 10px;
    margin-left: 5px;
`

export const SortRepos = styled.select`
    appearance: none;
    border: 1px solid black;
    border-radius: 2px;
    padding: 0 16px;
    height: 20px;
    text-align: center;
    cursor: pointer;
`

export const SortingWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const SortDirectionButton = styled.label`
    appearance: none;
    border: 1px solid black;
    border-radius: 2px;
    color: black;
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:after {
        display: inline-block;
        width: 0;
        height: 0;
        vertical-align: -2px;
        content: "";
        border: 4px solid transparent;
        border-top-color: currentcolor;
        transform:  ${props => !props.checked ? 'translateY(-2px) rotate(180deg)' : 'translateY(2px)'};
    }

    input {
        display: none;
    }
`
