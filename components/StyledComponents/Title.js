import styled from "@emotion/styled";

// Create a <Wrapper> react component that renders a <section>
// with some padding and a papayawhip background
export default styled("h2")`
    font-family: Arial;
    text-transform: uppercase;
    font-size: ${props => {
        if (props.small) return '18px'
        if (props.medium) return '21px'
        if (props.large) return '24px'
    }};
    text-align: ${props => {
        if (props.centered) return 'center'
        if (props.right) return 'right'
    }};
`;