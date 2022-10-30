import styled from "styled-components";
import {mediumGrey} from './GolobalStyle'

export const Card = styled.div`
    padding: 20px;
    background-color:white;
    margin-top:20px;
    box-shadow: 0px 3px 5px ${mediumGrey};
    box-sizing: border-box;
    ${({height}) => height && `height: ${height}px;`}
    @media (max-width:1200px){
        padding: 10px;
    }
`