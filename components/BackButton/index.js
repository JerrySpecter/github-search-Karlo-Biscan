import React from 'react'
import Router from 'next/router'
import styled from '@emotion/styled'

const Back = styled.button`
    background-color: transparent;
    border: none;
    font-size: 16px;
    text-decoration: none;
    margin-top: 40px;
`

export default function BackButton() {
    const handleClick = (e) => {
        e.preventDefault()

        Router.back()
    }

    return (
        <Back type="button" href="#" onClick={handleClick}>Back</Back>
    )
}
