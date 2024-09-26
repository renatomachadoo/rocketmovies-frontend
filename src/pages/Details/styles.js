import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    > main {
        width: 100%;
        max-width: 1366px;

        padding: 50px 123px;

        margin: 0 auto;

        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0;
 
        overflow-y: auto;

        .details-header {
            margin-top: 24px;

            display: flex;
            align-items: center;
            gap: 19px;

            h2 {
                color: ${ ({ theme }) => theme.COLORS.WHITE};
                font-size: 36px;
                font-weight: 500;
            }

            .rating {
                display: flex;
                align-items: center;
                gap: 10px;

                color: ${ ({ theme }) => theme.COLORS.PINK};
            }
        } 

        .details-creation-info{
            margin-top: 24px;

            display: flex;
            gap: 12px;
            align-items: center;

            color: ${ ({ theme }) => theme.COLORS.GRAY_50};

            font-size: 16px;
            font-weight: normal;

            > div {
                display: flex;
                align-items: center;
                gap: 8px;

                svg {
                    color: ${ ({ theme }) => theme.COLORS.PINK};
                }
            }
        }

        .details-tags{
            margin-top: 40px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        > p {
            margin-top: 40px;
        }
    }
`