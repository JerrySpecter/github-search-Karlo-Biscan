/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import Router from 'next/router'
import UserList from '../components/UserList/index'
import withData from '../lib/apollo'
import appConfig from '../lib/config'

const POSTS_PER_PAGE = 10

const Search = () => {
    const [searchString, setSearchString] = useState('')
    const [lastSearchData, setLastSearchData] = useState(null)

    const [getUserList, { loading, error, data }] = useLazyQuery(appConfig.GET_USER_LIST, {
        errorPolicy: 'all',
        variables: { skip: 0, first: POSTS_PER_PAGE, query: `${searchString} in:login` },
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
            const localData = completedData ? JSON.stringify(completedData) : sessionStorage.getItem('last_search_data')

            sessionStorage.setItem('last_search_data', localData)
            localStorage.setItem('last_search_string', searchString)

            setLastSearchData(JSON.parse(localData))
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
        <div className="container">
            <p>Search for users:</p>
            <input
                type="text"
                value={searchString}
                onChange={(e) => {
                    getUserList()
                    setSearchString(e.target.value)
                }}
            />

            <UserList data={lastSearchData} loading={loading} />
        </div>
    )
}

export default withData(Search)
