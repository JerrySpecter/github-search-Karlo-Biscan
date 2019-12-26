import React from 'react'
import PropTypes from 'prop-types'
import Button from '../StyledComponents/Button'
import {
    ProfileHeaderWrapper,
    ProfileHeaderAvatarWrapper,
    ProfileHeaderAvatar,
    ProfileHeaderContent,
    UserName,
    UserLogin,
    UserBio,
    UserMeta,
    UserInfo
} from './styles'

const ProfileHeader = ({ user }) => {
    return (
        <ProfileHeaderWrapper>
            {user.avatarUrl && 
            <ProfileHeaderAvatarWrapper>
                <ProfileHeaderAvatar src={user.avatarUrl} alt={user.name}/>
            </ProfileHeaderAvatarWrapper>
            }
            <ProfileHeaderContent>
                {user.name && <UserName>{user.name}</UserName>}
                {user.login && <UserLogin>{user.login}</UserLogin>}

                {user.bio && <UserBio>{user.bio}</UserBio>}

                <UserMeta>
                    <UserInfo>
                        {user.company && <span>{user.company}</span>}
                        {user.location && <span>{user.location}</span>}
                        {user.email && <span>{user.email}</span>}
                    </UserInfo>
                    <Button as="a" type="button" href={user.url} secondary>View on Github</Button>
                </UserMeta>
            </ProfileHeaderContent>
        </ProfileHeaderWrapper>
    )
}

ProfileHeader.propTypes = {
    user: PropTypes.shape({})
}

export default ProfileHeader