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
  width: 12px;
  height: 12px;
  position: absolute;
  top: 38%;
  right: 5%;
`;

export const Collapse = styled.div`
  background: #781C1C;
  height: calc(100 * var(--vh));
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
    max-height: calc(100vh - 7em);
    height: 100vh;
    overflow: auto;
    a {
      display: block;
      color: white;
      font-size: 1rem
      text-align: left;
      font-weight: 500;;
      text-decoration: none;
      text-transform: capitalize;
      margin-bottom: 1.5em;
      position: relative;
    }
    .active {
      .icono {/* reviews */
        border: 0;
        top: 14%;
        border-bottom: 3px solid white;
        border-right: 3px solid white;
        border-radius: 3px;
        transform: translateY(-50%) rotate(223deg);
        z-index: 2;
        cursor: pointer;
      }
    }
    .no-active {
      .icono {/* reviews */
        border: 0;
        border-bottom: 3px solid white;
        border-right: 3px solid white;
        border-radius: 3px;
        transform: translateY(-50%) rotate(45deg);
        z-index: 2;
        cursor: pointer;
      }
    }
    li {
      > div > a:before {
        content: '';
        height: 25px;
        width: 25px;
        display: inline-block;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        margin-right: .8em;
        transform: translateY(5px);
      }
      &:nth-child(1) > div > a:before{
        background-image: url("${home}");
      }
      &:nth-child(2) > div {
        position: relative;
      > a:before{
          background-image: url("${openBook}");
        }
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
      position: absolute;
      bottom: 0;
      left: 50%;
      font-size: 0.9rem;
      color: #FF1A1A;
      text-align: center;
      white-space: nowrap;
      border-radius: 20px;
      background: #fff;
      padding: .5em 1.2em;
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
    a {
      text-align: center;
    }
  }
`;