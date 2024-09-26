import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    > main {
        width: 100%;
        max-width: 1366px;

        margin: 0 auto;
        padding: 50px 123px;

        display: flex;
        flex-direction: column;

        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0;

        overflow-y: auto;

        h2 {
            font-size: 36px;
            font-weight: 500;
            margin-top: 24px;
            margin-bottom: 45px;
        }

        .cols-2 {
            display: grid;
            grid-template-columns: auto auto;
            gap: 40px;
        }

        textarea {
            margin-top: 40px;
        }

        section{
            margin-top: 40px;
            p {
                font-size: 20;
                color: ${ ({ theme}) => theme.COLORS.GRAY_300};

                margin-bottom: 24px;
            }

            #markers{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                gap: 16px;

                background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_950};

                padding: 16px;

                border-radius: 10px;

                margin-bottom: 40px;
            }
        }
    }
`