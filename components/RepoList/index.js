/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Button from '../StyledComponents/Button'
import {
    Notice,
    List,
    ListItem,
    ListItemWrapper,
    ListItemHeader,
    ListItemDescription,
    ListItemMeta,
    ListItemInfo,
    LastUpdated
} from './styles'


const RepoList = ({ repositories, loading }) => {
    const { edges } = repositories || {}
    if (loading) return <Notice>Loading...</Notice>

    if (repositories) {
        return (
            <List>
                {edges.map(({ node }, index) => (
                    <ListItem key={node.id}>
                        <ListItemWrapper>
                            <ListItemHeader>
                                {node.name}
                            </ListItemHeader>
                            <ListItemDescription>
                                {node.description}
                            </ListItemDescription>
                            <ListItemInfo>
                                <ListItemMeta>
                                    {node.languages.edges.map((langNode, index) => (
                                        langNode && <span key={langNode.node.id}>{index < node.languages.edges.length - 1 ? `${langNode.node.name}, ` : langNode.node.name}</span>
                                    ))}
                                </ListItemMeta>
                            </ListItemInfo>
                        </ListItemWrapper>
                        <Button type="button" secondary textSmall href={node.url}>View on Github</Button>
                    </ListItem>
                ))}
            </List>
        )
    }

    return <Notice>List is empty</Notice>
}

RepoList.propTypes = {
    data: PropTypes.shape({}),
    search: PropTypes.shape({}),
    userCount: PropTypes.number,
    loading: PropTypes.bool,
    error: PropTypes.shape({}),
}

export default RepoList
