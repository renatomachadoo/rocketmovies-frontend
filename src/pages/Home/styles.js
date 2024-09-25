import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    max-height: 100vh;

    overflow: hidden;

    display: flex;
    flex-direction: column;

    > main {
        width: 100%;
        max-width: 1366px;

        margin: 0 auto;
        padding: 50px 123px;

        
        display: flex;
        flex-direction: column;
        gap: 37.45px;

        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0;

        #content-header{
            display: flex;
            justify-content: space-between;

            button{
                width: 240px;
            }

            h1 {
                font-size: 32px;
                color: ${ ({ theme }) => theme.COLORS.WHITE };
            }
        }

        #movies {
            flex-grow: 1;
            flex-shrink: 1;
            flex-basis: 0;
            overflow-y: auto;

            display: flex;
            flex-direction: column;
            gap: 24px;
        }
    }
`