import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 56px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${ ({ theme }) => theme.COLORS.WHITE};

    border-radius: 10px;

    > svg {
        margin: 0 12px;
        color: ${ ({ theme }) => theme.COLORS.GRAY_200};;
    }

    > input {
        width: 100%;
        height: 100%;

        background-color: transparent;
        color: ${ ({ theme }) => theme.COLORS.WHITE};
        
        font-size: 14px;

        border: none;
        
        &:placeholder{
            color: ${ ({ theme }) => theme.COLORS.GRAY_200};
        }
    }
`