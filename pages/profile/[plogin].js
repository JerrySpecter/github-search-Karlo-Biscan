import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import withData from "../../lib/apollo";
import { GET_PROFILE, REPOS_PER_LOAD, repoSortingData } from "../../lib/config";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from 'next/router'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import BackButton from '../../components/BackButton/index'
import Button from '../../components/StyledComponents/Button'
import Section from '../../components/StyledComponents/Section'
import ProfileHeader from '../../components/ProfileHeader/index'
import RepoList from '../../components/RepoList/index'
import Container from '../../components/StyledComponents/Container'
import Title from '../../components/StyledComponents/Title'
import { GlobalStyles } from '../../lib/styles'
import onFetchMore from '../../lib/fetchMore'
import { Global } from "@emotion/core"
import {
    ProfileStateMsg,
    RepoListHeader,
    TotalRepoCount,
    SortRepos,
    SortingWrapper,
    SortDirectionButton
} from './styles'


const Profile = (props) => {
    const [areMorePosts, setAreMorePosts] = useState(false)
    const [currentCount, setCurrentCount] = useState(REPOS_PER_LOAD)
    const [currentSorting, setCurrentSorting] = useState(repoSortingData[0])
    const [currentSortingDirection, setCurrentSortingDirection] = useState(true)

    const router = useRouter()
    const { plogin } = router.query

    const variables = { 
        login: plogin,
        first: currentCount,
        order: {
            field: currentSorting,
            direction: currentSortingDirection ? 'ASC' : 'DESC'
        } 
    }


    const { loading, error, data, fetchMore } = useQuery(GET_PROFILE, {
        variables
    });

    const { user } = data || {}
    const { repositories } = user || {}

    const handleOnSortChange = (e) => {
        setCurrentSorting(e.target.value)
    }

    useEffect(() => {
        if (!localStorage.getItem('pat_token')) {
            Router.push({
                pathname: '/login',
            })
        }
    }, [])

    useEffect(() => {
        const onCompleted = (completedData) => {
            console.log(completedData)
            const repoCount = completedData ? completedData.user.repositories.totalCount : 0

            if (completedData) {
                completedData.user.repositories.edges.length < repoCount ? setAreMorePosts(true) : setAreMorePosts(false)
                setCurrentCount(completedData.user.repositories.edges.length)
            }
        }

        const onError = () => {
            console.log('onError')
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
                onError()
            }
        }
    }, [loading, data, error])

    return (
        <>
            <Global
                styles={GlobalStyles}
            />
            {(data && user) && 
                <>
                    <Header>
                        <BackButton />
                    </Header>
                    <Section bgColor="#f7f7f7">
                        <Container>
                            <ProfileHeader user={user} />
                        </Container>
                    </Section>
                    <Container>
                        <RepoListHeader>
                            <Title>Repositories <TotalRepoCount>{repositories.totalCount}</TotalRepoCount></Title>
                            <SortingWrapper>
                                {repoSortingData && 
                                    <SortRepos onChange={(e) => handleOnSortChange(e)}>
                                        {repoSortingData.map((value, index) => (
                                            <option key={new Date + index} value={value}>{value}</option>
                                        ))}
                                    </SortRepos>
                                }
                                <SortDirectionButton checked={currentSortingDirection}>
                                    <input type="checkbox" onChange={(e) => setCurrentSortingDirection(e.target.checked)}/>
                                </SortDirectionButton>
                            </SortingWrapper>
                        </RepoListHeader>
                        <RepoList repositories={repositories} />
                        {areMorePosts ? (
                            <Button centered onClick={e => onFetchMore(fetchMore, currentCount, REPOS_PER_LOAD)}>
                                {loading ? "Loading..." : "Show More"}
                            </Button>
                            ) : (
                            ""
                        )}
                    </Container>
                    <Footer />
                </>
            }

            {loading && <ProfileStateMsg>Loading...</ProfileStateMsg>}
            
            {error && <ProfileStateMsg>Error {error}</ProfileStateMsg>}
        </>
    );
}

export default withData(Profile)