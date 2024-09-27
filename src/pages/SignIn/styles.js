import styled from "styled-components";
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
`

export const BackgroundImage = styled.div`
    flex : 1;

    background: url(${backgroundImg}) no-repeat center;
    background-size: cover;
`

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    justify-content: center;
    flex-direction: column;

    > h1 {
        font-size: 48px;
        font-weight: bold;
        color: ${ ({ theme }) => theme.COLORS.PINK};
    }

    > p {
        color: ${ ({ theme }) => theme.COLORS.GRAY_200 };
        font-size: 14px;
    }

    > h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 24px;
        font-weight: 500;
        margin-top: 48px;
        margin-bottom: 48px;
    }

    > div {
        margin-bottom: 8px;
    }

    > button:first-of-type{
        margin-bottom: 42px;
    }
`
