import styled from "@emotion/styled";

export const MoviesContainer = styled.div`
    ${({ themeStyles }) => themeStyles}
    padding: 20px;
`
export const MoviesUnorderedList = styled.ul`
    padding: 0px;
    list-style-type: none;
`
export const MovieItem = styled.li`
    padding: 10px;
    border-radius: 10px;
`

