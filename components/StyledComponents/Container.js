import styled from '@emotion/styled'
import { css } from '@emotion/core'

const LoginFormWrapper = css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh
`

// Create a <Wrapper> react component that renders a <section>
// with some padding and a papayawhip background
const Container = styled.div`
    max-width: 1200px;
    padding: 0 15px;
    margin: 0 auto;
    ${props => props.login ? LoginFormWrapper : ''}
    ${props => props.fullheight ? 'min-height: 100vh;' : ''}
`
export default Container