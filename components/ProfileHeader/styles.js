import styled from '@emotion/styled'

export const ProfileHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 780px;
    margin: 0 auto;
    padding: 40px 0;
`
export const ProfileHeaderAvatarWrapper = styled.div`
    position: relative;
    width: 20%;
`
export const ProfileHeaderAvatar = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const ProfileHeaderContent = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
`
export const UserName = styled.h2`
    font-size: 24px;
    font-weight: 700;
    margin: 0 0 15px;
`
export const UserLogin = styled.h4`
    font-size: 18px;
    color: gray;
    margin: 0 0 15px;
`
export const UserBio = styled.p`
    font-size: 16px;
`
export const UserMeta = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const UserInfo = styled.div`
    display: flex;

    span {
        margin-right: 15px;
        color: gray;
        font-size: 14px;
    }
`