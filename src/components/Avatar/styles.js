import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    
    > img {
        width: ${({ size }) => `${size}px`};
        height: ${({ size }) => `${size}px`};

        border: 1px solid ${ ({ theme }) => theme.COLORS.BORDER};

        border-radius: 50%;
    }
`