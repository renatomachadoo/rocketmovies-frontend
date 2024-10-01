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

        > a {
            text-decoration: none;
            color: ${ ({ theme }) => theme.COLORS.PINK};

            
        }

        > h2 {
            font-size: 24px;
            font-weight: 700;
        }

        > div {
            display: flex;
            align-items: center;
            justify-content: center;

            > div {
                display: flex;
                flex-direction: column;
                text-align: end;

                margin-right: 9px;

                > p{
                    color: ${ ({ theme }) => theme.COLORS.WHITE};
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                > button{
                    color: ${ ({ theme }) => theme.COLORS.GRAY_200};
                    background-color: transparent;
                    border: none;
                    outline: none;
                    text-align: end;
                    width: fit-content;
                    place-self: end;
                }
            }
        }
    }
`