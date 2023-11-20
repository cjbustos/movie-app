import styled from "@emotion/styled";

export const NavbarContainer = styled.div`
    ${({ themeStyles }) => themeStyles}
    padding: 5px;
    padding-botton: 20px;
    h1{
        text-decoration: underline;
    }
    ul{
        padding: 0;
        cursor: pointer;
    }
    li{
        display: inline-block;
        margin: 0 10px;
        font-weight: 600;
    }
   `