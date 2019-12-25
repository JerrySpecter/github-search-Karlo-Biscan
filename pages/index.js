/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import Router from 'next/router'
import UserList from '../components/UserList/index'
import Header from '../components/Header/index'
import Footer from '../components/Footer/index'
import withData from '../lib/apollo'
import onFetchMore from '../lib/fetchMore'
import { GET_USER_LIST, USERS_PER_LOAD } from '../lib/config'
import { GlobalStyles } from '../lib/styles'
import Container from '../components/StyledComponents/Container'
import Title from '../components/StyledComponents/Title'
import Button from '../components/StyledComponents/Button'
import Section from '../components/StyledComponents/Section'
import { Global, css } from "@emotion/core"
import {
    SearchField,
    SearchWrapper,
    UserListHeader,
    TotalUserCount
} from './styles'

const Search = () => {
    const [searchString, setSearchString] = useState('')
    const [lastSearchData, setLastSearchData] = useState({})
    const [areMorePosts, setAreMorePosts] = useState(false)
    const [currentCount, setCurrentCount] = useState(0)

    const [getUserList, { loading, error, data, fetchMore }] = useLazyQuery(GET_USER_LIST, {
        errorPolicy: 'all',
        variables: { skip: 0, first: USERS_PER_LOAD, query: `${searchString} in:login` },
    })

    useEffect(() => {
        if (localStorage.getItem('pat_token')) {
            getUserList()
        } else {
            Router.push({
                pathname: '/login',
            })
        }

        if (sessionStorage.getItem('last_search_data')) {
            const localData = JSON.parse(sessionStorage.getItem('last_search_data'))
            setLastSearchData(localData)
        }

        if (localStorage.getItem('last_search_string')) {
            setSearchString(localStorage.getItem('last_search_string'))
        }
    }, [])

    useEffect(() => {
        const onCompleted = (completedData) => {
            console.log('Completed')
            const localData = completedData ? JSON.stringify(completedData) : sessionStorage.getItem('last_search_data')

            sessionStorage.setItem('last_search_data', localData)
            localStorage.setItem('last_search_string', searchString)

            setLastSearchData(JSON.parse(localData))

            const userCount = completedData ? completedData.search.userCount : 0

            if (completedData) {
                completedData.search.edges.length < userCount ? setAreMorePosts(true) : setAreMorePosts(false)
                setCurrentCount(completedData.search.edges.length)
            }
        }

        const onError = () => {
            Router.push({
                pathname: '/login',
                query: {
                    error: 'true',
                },
            })
        }

        if (onCompleted || onError) {
            if (onCompleted && !loading && !error) {
                onCompleted(data)
            } else if (onError && !loading && error) {
                onError(error)
            }
        }
    }, [loading, data, error])

    return (
        <>
            <Global
                styles={GlobalStyles}
            />
            <Header />

            <Section bgColor="#f7f7f7">
                <Container>
                    <SearchWrapper>
                        <Title medium centered>Welcome to github search app</Title>
                        <SearchField
                            type="text"
                            value={searchString}
                            placeholder="Type in user login..."
                            onChange={(e) => {
                                getUserList()
                                setSearchString(e.target.value)
                            }}
                        />
                    </SearchWrapper>
                </Container>
            </Section>
            <Container>
                {(data && data.search.userCount !== 0) && 
                    <UserListHeader>
                        <Title>Users {data && <TotalUserCount>{data.search.userCount}</TotalUserCount>}</Title>
                    </UserListHeader>
                }

                <UserList data={lastSearchData} loading={loading} />

                {areMorePosts ? (
                    <Button centered onClick={e => onFetchMore(fetchMore, currentCount, USERS_PER_LOAD)}>
                        {loading ? "Loading..." : "Show More"}
                    </Button>
                    ) : (
                    ""
                )}
            </Container>
            <Footer />
        </>
    )
}

export default withData(Search)
