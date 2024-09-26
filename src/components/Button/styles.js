import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 48px;
    padding: 13.5px 32px;

    text-align: center;

    background-color: ${ ({ theme, secondary }) => secondary ? theme.COLORS.BACKGROUND_950 : theme.COLORS.PINK };
    color: ${ ({ theme, secondary }) => secondary ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_900};

    border: none;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5px;
`