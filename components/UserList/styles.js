import styled from '@emotion/styled'

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 20px auto;
    max-width: 780px;
`
export const ListItem = styled.li`
    padding: 20px 5px;
    border-top: 1px solid lightgray;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    &:last-of-type {
        border-bottom: 1px solid lightgray;
    }

    button {
        width: 120px;
        padding: 6px 12px;
    }
`
export const ListItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
`
export const ListItemHeader = styled.div`
    a {
        color: black;
        font-weight: 700;
        text-decoration: none;
        transition: color .15s ease-in-out;
        font-size: 18px;

        &:hover,
        &:focus {
            color: gray;
        }
    }
`
export const ListItemDescription = styled.p`
    color: gray;
`
export const ListItemMeta = styled.div`
    color: lightgray;
    font-size: 14px;
`
export const AvatarWrapper = styled.div`
    position: relative;
    width: 46px;
    height: 46px;
    margin-right: 20px;
`
export const Avatar = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2px;
`
export const Notice = styled.p`
    text-align: center;
    color: gray;
`
