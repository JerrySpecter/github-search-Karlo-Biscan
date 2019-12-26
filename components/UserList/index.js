/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Button from '../StyledComponents/Button'
import {
    Notice,
    List,
    ListItem,
    AvatarWrapper,
    Avatar,
    ListItemWrapper,
    ListItemHeader,
    ListItemDescription,
    ListItemMeta
} from './styles'


const UserList = ({ data, loading }) => {
    const { search } = data || {}
    const { userCount, edges } = search || {}

    if (data && search  && userCount !== 0) {
        return (
            <List data-testid="UserList">
                {edges.map(({ node }) => (
                    <ListItem key={node.id}>
                        <AvatarWrapper>
                            <Avatar src={node.avatarUrl} alt={node.name} />
                        </AvatarWrapper>
                        <ListItemWrapper>
                            <ListItemHeader>
                                <Link href={`/profile/${node.login}`}>
                                    <a>{node.name} ({node.login})</a>
                                </Link>
                            </ListItemHeader>
                            <ListItemDescription>
                                {node.bio}
                            </ListItemDescription>
                            <ListItemMeta>
                                <span>{node.location}</span>
                                <span>{node.email}</span>
                            </ListItemMeta>
                        </ListItemWrapper>
                        <Button type="button" secondary textSmall href={node.url}>View on Github</Button>
                    </ListItem>
                ))}
            </List>
        )
    }

    if (loading) return <Notice>Loading...</Notice>

    return <Notice>List is empty</Notice>
}

UserList.propTypes = {
    data: PropTypes.shape({}),
    search: PropTypes.shape({}),
    userCount: PropTypes.number,
    loading: PropTypes.bool,
    error: PropTypes.shape({}),
}

export default UserList
