import styled from "styled-components";

import borderRed from './../../assets/img/border-red.png';
import chispas from './../../assets/img/chispas.png';
import dayTop from './../../assets/img/day-top.png';
import dayBottom from './../../assets/img/day-bottom.png';

export const HomeRecipes = styled.div`
  background: #027334;
  padding: 1em 1.1em;
  z-index: 2;
  position: relative;
  @media (max-width: 768px){
    min-height: 100vh
  }
  .recipes-home-wrap {
    height: calc(100vh - 2em);
    padding: 13% 0;
    text-align: center;
    border-style: solid;
    border-width: 10px 10px 10px 10px;
    border-image: url("${borderRed}") 9 9 9 9 repeat repeat;
    background-image: url("${chispas}"), radial-gradient(#FF1A1A, #AE2424 78%);
    background-position: center, center;
    background-repeat: no-repeat;
    background-size: 182%, 101%;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4em;
      background: url("${dayTop}") center bottom/100% no-repeat;
    }
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4.4em;
      background: url("${dayBottom}") center top/119% no-repeat;
    }
    .close {
      display: inline-block;
      float: right;
      text-decoration: none;
      margin: .5em;
    }
    .flex {
      margin-bottom: 1em;
      clear: both;
      display: block;
      overflow: hidden;
    }
    .img-comparte img {
      width: 80%;
    }
    .list-novena {
      height: 100%;
      max-height: calc(100vh - 109vw);
      overflow-x: hidden;
      overflow-y: scroll;
    }
  }
  .comparte a,
  .list-novena a {
    min-width: calc(100% - 8em);
    display: inline-block;
    font-size: 1rem;
    color: #08B761;
    text-transform: capitalize;
    text-decoration: none;
    border-radius: 20px;
    padding: .5em 2.5em;
    margin-bottom: 7%;
    background: #fff;
    box-shadow: 0 3px 3px rgb(0 0 0 / 14%);
  }
  .comparte p {
    color: white;
    margin-bottom: 1em;
  }
  .arrow {
    position: absolute;
    bottom: 1.8em;
    left: 50%;
    transform: rotate(45deg) translateX(-50%);
    width: 14px;
    height: 14px;
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
    border-radius: 3px;
  }
  .arrow:before {
    content:'' ;
    position: absolute;
    top: -5px;
    left: -5px;
    width: 14px;
    height: 14px;
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
    border-radius: 3px;
  }
`;
export const Modal = styled.div`
  background-color: red;
`;


