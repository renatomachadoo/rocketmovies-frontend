import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;

    padding: 19px 16px;

    resize: none;

    color: ${ ({ theme }) => theme.COLORS.WHITE};
    background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_800};

    font-size: 14px;

    border: none;
    border-radius: 10px;
    
    &:placeholder{
        color: ${ ({ theme }) => theme.COLORS.GRAY_200};
    }
`