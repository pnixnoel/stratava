import styled from "styled-components";

const getVariantColor = (variant) => {
    switch(variant) {
        case "primary":
            return "#92e3a9"
        case "light":
            return "#fff"
    }
}

const StyledButton = styled.button`
  padding: 1rem 2.4rem;
  background-color: ${({variant}) => getVariantColor(variant)};
  border: 1px solid;
  cursor: pointer;
  ${(props) => props.buttonCenter && "margin: 10px auto;"};
`;

export default function Button({buttonCenter = false, children, variant = 'primary', ...props }) {
    return (
        <StyledButton {...props} buttonCenter={buttonCenter} variant={variant}>{children}</StyledButton>
    );
  }