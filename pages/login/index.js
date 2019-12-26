import React, { useState } from 'react'
import Router, { useRouter } from 'next/router'
import withData from '../../lib/apollo'
import Container from '../../components/StyledComponents/Container'
import Title from '../../components/StyledComponents/Title'
import Button from '../../components/StyledComponents/Button'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import { GlobalStyles } from '../../lib/styles'

const LoginFormWrapper = styled.div`
    max-width: 290px;
    border: 1px solid lightgray;
    border-radius: 2px;
    padding: 15px;
`

const ErrorMsg = styled.p`
    color: #c41818;
    border: 1px solid #c41818;
    border-radius: 2px;
    background-color: rgba(196, 24, 24, 0.15);
    padding: 5px;
    font-family: sans-serif;
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
`

const LoginFormInput = styled.input`
    height: 32px;
    padding: 0 10px;
    font-size: 14px;
    margin-bottom: 25px;
`

const Login = () => {

    const router = useRouter()
    const [token, setToken] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        localStorage.setItem('pat_token', token)

        Router.push({
            pathname: '/',
        })
    }

    return (
        <Container login>
            <Global styles={GlobalStyles} />
            <LoginFormWrapper>
                <Title heading small centered>Insert your Github Personal access tokens</Title>
                {router.query.error && <ErrorMsg>There has been an error.</ErrorMsg>}
                <LoginForm onSubmit={handleSubmit}>
                    <LoginFormInput type="text" onChange={(e) => setToken(e.target.value)} />
                    <Button>Submit</Button>
                </LoginForm>
            </LoginFormWrapper>
        </Container>
    )
}

export default withData(Login)
