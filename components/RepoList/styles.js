import styled from '@emotion/styled'

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 40px auto;
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
    color: black;
    font-weight: 700;
    font-size: 21px;
    margin: 0 0 15px;
`
export const ListItemDescription = styled.p`
    color: gray;
    font-size: 14px;
    margin: 0 0 15px;
`
export const ListItemMeta = styled.div`
    font-size: 14px;
    color: lightgray;

    span {
        margin-right: 5px;
    }
`
export const ListItemInfo = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: lightgray;
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
