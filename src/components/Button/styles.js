import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 48px;
    padding: 13.5px 32px;

    text-align: center;

    background-color: ${ ({ theme }) => theme.COLORS.PINK};
    color: ${ ({ theme }) => theme.COLORS.BACKGROUND_900};

    border: none;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5px;
`