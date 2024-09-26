import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_800};

    padding: 16px;

    border-radius: 10px;

    border: ${ ({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_200}` : "none"};

    > input {
        background-color: transparent;
        color: ${ ({ theme}) => theme.COLORS.WHITE};
        font-size: 16px;

        &:placeholder{
            color: ${ ({ theme }) => theme.COLORS.GRAY_200};
        }

        border: none;
    }

    > button {
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: transparent;
        border: none;
        color: ${ ({ theme }) => theme.COLORS.PINK};
    }
`