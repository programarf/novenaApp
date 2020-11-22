import styled from "styled-components";
import { keyframes } from "styled-components"

export const ListMenu = styled.div`
  background-color: yellow;
  ul{
    display: grid;

   /*  flex-direction: column;
    justify-content: center;
    align-items: center; */
  }
  li a{

  }
`;

export const Collapse = styled.div`
  background: #781C1C;
  height: 100Vh;
  padding: 1em;
  position: relative;
  button {
    border: none;
    background: transparent;
    padding: 0;
    float: right;
  }
  button:focus {
    outline: transparent;
  }
  ul {
    padding: 1em 0;
  }
  a {
    display: block;
    color: white;
    font-size: 1rem;
    text-align: left;
    text-decoration: none;
    text-transform: capitalize;
    margin-bottom: 1.5em;
  }
`;
/* export const LiItem = styled.li`
    background-color:  ${props => props.theme.fg};;
    border-radius: 20px;
    //color:  ${props => props.theme.bg};
    a{
      color: ${props => props.primary ? "white" : "palevioletred"};
    }
`; */
/* const theme = {
  fg: "palevioletred",
  bg: "white"
}; */
const rotate = keyframes`
  from {
    margin-left: -40%
  }
  to {
    margin-left: 0;
  }
`;


export const DropDown = styled.div`
  overflow: hidden;
  height: 0;
  &.true{
    animation: ${rotate} .3s linear;
    animation-iteration-count:1;
    height: auto;
  }
`;