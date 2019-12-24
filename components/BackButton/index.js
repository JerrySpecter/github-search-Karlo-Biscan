import React from 'react'
import Router from 'next/router'

export default function BackButton() {
    const handleClick = (e) => {
        e.preventDefault()

        Router.back()
    }
    return (
        <button type="button" href="#" onClick={handleClick}> &lt; Go Back</button>
    )
}
