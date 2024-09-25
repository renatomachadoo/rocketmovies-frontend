import styled from "styled-components";

export const Container = styled.div`
    background-color: ${ ({ theme}) => theme.COLORS.BACKGROUND_700 };
    color: ${ ({ theme }) => theme.COLORS.GRAY_100 };

    font-size: 12px;
    text-align: center;
    padding: 5px 16px;

    border-radius: 8px;
`