import styled from "@emotion/styled"

// Create a <Wrapper> react component that renders a <section>
// with some padding and a papayawhip background
const Section = styled.section`
    background-color: ${props => props.bgColor};
`
export default Section