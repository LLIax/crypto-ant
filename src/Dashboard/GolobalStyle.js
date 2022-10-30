import styled, {createGlobalStyle} from "styled-components";

export const darkGrey = "#515263";
export const lightGrey = "#F7F7F7";
export const mediumGrey = "#afafaf"

export const GlobalStyle = createGlobalStyle `
    body {
        color: ${darkGrey};
        background-color: ${lightGrey};
        font-family: 'Source Sans Pro', sans-serif;
        
    }
`