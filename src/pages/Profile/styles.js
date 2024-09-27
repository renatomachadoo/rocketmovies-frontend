import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    > header {
        width: 100%;
        height: 144px;
        background-color: ${ ({ theme}) => theme.COLORS.LIGHT_PINK};

        .header-div {
            width: 100%;
            height: 100%;

            position: relative;
            
            display: flex;
            align-items: center;

            margin: 0 auto;
            padding: 50px 123px;
            max-width: 1366px;

            > div {
                position: absolute;
                left: 0;
                right: 0;
                bottom: -90px;
                place-self: center;

                > form {
                    > label {
                        position: absolute;
                        height: 48px;
                        width: 48px;

                        display: flex;
                        align-items: center;
                        justify-content: center;

                        border-radius: 50%;
                        color: ${ ({ theme }) => theme.COLORS.BLACK};

                        right: 10px;
                        bottom: 4px;
                        background-color: ${ ({ theme}) => theme.COLORS.PINK};
                        cursor: pointer;
                    }

                    > input {
                        display: none;
                    }
                }
            }
        }
    }   

    > main {
        width: 100%; 

        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        > div {
            width: 100%;
            max-width: 340px;
            margin: 0 auto;

            display: flex;
            flex-direction: column;
            gap: 24px;

            align-items: center;
            justify-content: center;

            > div {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
        }
    }
`