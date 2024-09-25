import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
        width: 64px;
        height: 64px;

        border: 1px solid ${ ({ theme }) => theme.COLORS.BORDER};

        border-radius: 50%;
    }

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

        > span{
            color: ${ ({ theme }) => theme.COLORS.GRAY_200};
        }
    }

    
`