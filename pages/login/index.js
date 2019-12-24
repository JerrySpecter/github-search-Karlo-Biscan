import react, { useState } from 'react'
import withData from "../../lib/apollo";
import Router, { useRouter } from 'next/router'

const Login = (props, history) => {
    const router = useRouter()
    const [token, setToken] = useState('')
    
    const handleSubmit = e => {
        e.preventDefault()

        localStorage.setItem('pat_token', token)

        Router.push({
            pathname: '/'
        })
    }


    return (
        <div>
            <h2>Insert your Github Personal access tokens</h2>
            {router.query.error && <p>There has been an error, please try again.</p>}
            <form onSubmit={handleSubmit} >
                <input type="text" onChange={e => setToken(e.target.value)} />
            </form>
        </div>
    )
}

export default withData(Login)