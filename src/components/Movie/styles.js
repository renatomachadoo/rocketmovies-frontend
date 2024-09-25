import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 32px;

    background-color: ${ ({ theme }) => theme.COLORS.LIGHT_PINK};
    border-radius: 16px;

    > h2 {
        font-size: 24px;
        font-weight: 700;
        color: ${ ({ theme }) => theme.COLORS.GRAY_50 };
        margin-bottom: 8px;
    }

    #stars{
        color: ${ ({ theme }) => theme.COLORS.PINK};
        margin-bottom: 15px;
    }

    > p {
        font-size: 16px;
        color: ${ ({ theme }) => theme.COLORS.GRAY_300};
    }

    #tags{
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        margin-top: 15px;
    }
`