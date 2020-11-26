import styled from "styled-components";
import { keyframes } from "styled-components"

//images
import home from './../assets/img/icons/home.png';
import openBook from './../assets/img/icons/open-book.png';
import musicalNotes from './../assets/img/icons/musical-notes.png';
import chefsHat from './../assets/img/icons/chefs-hat.png';
import shoppingCart from './../assets/img/icons/shopping-cart.png';


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
export const Icon = styled.div`
  padding: .5em 1.5em 0;
  flex: 0 0 30%;
  &:after {
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    border-bottom: 3px solid white;
    border-right: 3px solid white;
    border-radius: 3px;
    transform: rotate(45deg);
    z-index: 2;
    cursor: pointer;
  }
`;

export const Collapse = styled.div`
  background: #781C1C;
  height: calc(100 * var(--vh));
  overflow: hidden;
  padding: 1em;
  position: relative;
  button.tclodes {
    border: none;
    background: transparent;
    padding: 0;
    float: right;
    &:focus {
      outline: transparent;
    }
  }
  .button-menu {
    clear: both;
    padding: 1em 0;
    max-height: calc(80 * var(--vh));
    height: 100vh;
    overflow: auto;
    .nav-icons {
      display: flex;
      flex-wrap: wrap;
    }
    a {
      display: block;
      flex: 0 0 70%;
      width: 100%;
      position: relative;
      color: white;
      font-size: 1.2rem;
      text-align: left;
      font-weight: 500;;
      text-decoration: none;
      text-transform: capitalize;
      // box-shadow: 0 0 0 2px red inset;
    }
    .active {
      .icono {
        &:after {
          transform: rotate(225deg);
        }
      }
    }
    li {
      margin-bottom: 1.5em;
      > div > a:before {
        content: '';
        height: 24px;
        width: 24px;
        display: inline-block;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        margin-right: .8em;
      }
      &:nth-child(1) > div > a:before{
        background-image: url("${home}");
      }
      &:nth-child(2) > div > a:before {
        background-image: url("${openBook}");
      }
      &:nth-child(3) > div > a:before{
        background-image: url("${musicalNotes}");
      }
      &:nth-child(4) > div > a:before{
        background-image: url("${chefsHat}");
      }
      &:nth-child(5) > div > a:before{
        background-image: url("${shoppingCart}");
      }
    }
    .btn-download {
      width: auto;
      display: inline-block;
      position: absolute;
      bottom: 0;
      left: 50%;
      font-size: 0.9rem;
      color: #FF1A1A;
      font-weight: 500;
      text-align: center;
      white-space: nowrap;
      border-radius: 20px;
      background: #fff;
      padding: .5em 1.2em;
      margin-bottom: 1.5rem;
      transform: translateX(-50%);
      &:before {
        content: none;
      }
    }
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
    flex: 0 0 100%;
    margin-top: 1.5em;
    a {
      text-align: center;
    }
  }
`;