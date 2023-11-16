import styled from "@emotion/styled";

export const NavbarContainer = styled.div`
    ${({ themeStyles }) => themeStyles}
    ul{
        padding: 0;
    }
    li{
        display: inline-block;
        margin: 0 10px;
    }
   `