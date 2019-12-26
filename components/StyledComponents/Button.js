import styled from '@emotion/styled'

// Create a <Wrapper> react component that renders a <section>
// with some padding and a papayawhip background
const Button = styled.button`
    display: block;
    color: ${props =>
        props.secondary ? '#28a745' : 'white'};
    background-color: ${props =>
        props.secondary ? 'transparent' : '#28a745' };
    border: 1px solid ${props =>
        props.secondary ? '#28a745' : 'transparent' };
    padding: 6px 24px;
    width: ${props =>
        props.full ? '100%' : 'auto' };
    appearence: none;
    text-decoration: none;
    font-size: ${props => {
        if (props.textSmall) return '12px'
        if (props.textMedium) return '14px'
        if (props.textLarge) return '16px'
    }};
    border-radius: 2px;
    transition: background-color .15s ease-in-out, color .15s ease-in-out, border-color .15s ease-in-out;

    ${props => {
        if (props.centered) return 'margin: 0 auto;'
    }}
    
    &:hover,
    &:focus {
        background-color: ${props =>
        props.secondary ? 'transparent' : '#2ebc4e' };
        color: ${props =>
        props.secondary ? '#2ebc4e' : 'white'};
        border: 1px solid ${props =>
        props.secondary ? '#2ebc4e' : 'transparent' };
    }
`

export default Button