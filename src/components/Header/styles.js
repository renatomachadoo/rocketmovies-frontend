import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 116px;

    background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_900};
    border-bottom: 1px solid ${ ({ theme }) => theme.COLORS.BORDER};

    > header {
        width: 100%;
        height: 100%;
        max-width: 1366px;
        background-color: transparent;

        padding: 24px 123px;
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 64px;

        h2 {
            color: ${ ({ theme }) => theme.COLORS.PINK};

            font-size: 24px;
            font-weight: 700;
        }
    }
`