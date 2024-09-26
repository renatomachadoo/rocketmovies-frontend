import styled from "styled-components";

export const Container = styled.button`
    background: transparent;
    color: ${ ({ theme }) => theme.COLORS.PINK };
    font-size: 16px;

    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
        margin-right: 8px;
    }
`