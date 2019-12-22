import Router from 'next/router'

export default function BackButton() {
    const handleClick = e => {
        e.preventDefault()

        Router.back()
    }
    return (
        <a href="#" onClick={handleClick}> &lt; Go Back</a>
    )
}