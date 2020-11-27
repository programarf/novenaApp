import styled from "styled-components";

import borderRed from './../../assets/img/border-red.png';
import chispas from './../../assets/img/chispas.png';
import dayTop from './../../assets/img/day-top.png';
import resetasTop from './../../assets/img/receta-top.png';
import resetasBottom from './../../assets/img/receta-bottom.png';
import dayBottom from './../../assets/img/day-bottom.png';
import point from './../../assets/img/point-white.png';

export const HomeRecipes = styled.div`
  background: #027334;
  padding: 1em 1.1em;
  z-index: 2;
  position: relative;
  .recipes-home-wrap {
    height: calc(100 * var(--vh) - 2em);
    padding: 13% 0;
    text-align: center;
    border-style: solid;
    border-width: 10px 10px 10px 10px;
    border-image: url("${borderRed}") 9 9 9 9 repeat repeat;
    background-image: url("${chispas}"), radial-gradient(#FF1A1A, #AE2424 78%);
    border-image-width: 1.2;
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
    .flex {
      margin-bottom: 1em;
      clear: both;
      display: block;
      overflow: hidden;
      .close {
        display: inline-block;
        float: right;
        text-decoration: none;
        margin: .5em;
      }
    }
    .img-comparte img {
      width: 80%;
      margin-bottom: 1em;
    }
    .list-novena {
      height: 100%;
      height: calc(100 * var(--vh) - 26em);
      overflow-x: hidden;
      overflow-y: scroll;
      a {
        width: 100%;
        max-width: 85%;
        display: inline-block;
        font-size: .9rem;
        color: #08B761;
        font-weight: 500;
        text-transform: capitalize;
        text-decoration: none;
        border-radius: 20px;
        padding: .7em 1.5em;
        margin-bottom: 1.3em;
        background: #fff;
        box-shadow: 0 3px 3px rgb(0 0 0 / 14%);
      }
    }
  }
  .comparte {
    p {
      color: white;
      margin-bottom: 1em;
    }
    a {
      min-width: calc(100% - 8em);
      display: inline-block;
      font-size: 1rem;
      color: #08B761;
      font-weight: 500;
      text-transform: capitalize;
      text-decoration: none;
      border-radius: 20px;
      padding: .5em 2.5em;
      margin-bottom: 7%;
      background: #fff;
      box-shadow: 0 3px 3px rgb(0 0 0 / 14%);
    }
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
    &:before {
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
  }
`;
export const Modal = styled.div`
  // background-color: red;
  position: relative;
  padding-top: 54%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100% !important;
  }
`;
export const DetailsRecipes = styled.div`
  background: #027334;
  padding: 1em 1.1em;
  z-index: 2;
  position: relative;
  min-height: calc(100 * var(--vh));
  max-height: calc(100 * var(--vh));
  .detail-recipes {
    height: calc(100 * var(--vh) - 2em);
    // height: calc(100vh - 2em);
    padding: 13% 0;
    text-align: center;
    border-style: solid;
    border-width: 10px 10px 10px 10px;
    border-image: url("${borderRed}") 9 9 9 9 repeat repeat;
    border-image-width: 1.2;
    background-image: radial-gradient(#FF1A1A, #AE2424 78%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 101%;
    background-clip: padding-box;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 5em;
      background: url("${resetasTop}") center bottom/100% no-repeat;
    }
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4.4em;
      background: url("${resetasBottom}") center top/119% no-repeat;
    }
    .menu-lateral {
      a {
        color: white;
        font-weight: 300;
        text-align: right;
        text-decoration: none;
        display: flex;
        justify-content: flex-end;
        padding: 1em 0;
        &:before{
          content: '';
          display: block;
          width: 17px;
          height: 18px;
          background: url("${point}") center left/100% no-repeat;
          margin-left: 10px;
        }
      }
    }
    .img-title img {
      width: 80%;
      margin-bottom: 1em;
    }
    .img-ingredien img {
      margin-top: 2em;
      margin-bottom: .5em;
    }
    .overflow {
      overflow-x: hidden;
      overflow-y: scroll;
      height: calc(70 * var(--vh));
    }
    .content-body {
      padding: 0 1em;
      color: #fff;
      text-align: left;
      line-height: 1.39;
      p {
        margin-bottom: 1rem;
      }
      strong {
        font-family: 'Museo Slab';
        font-weight: 700;
        color: #FFE100;
      }
      a {
        min-width: 70%;
        display: inline-block;
        text-align: center;
        font-size: 1rem;
        color: #08B761;
        text-transform: capitalize;
        text-decoration: none;
        border-radius: 20px;
        padding: .4em 2.5em;
        margin: 1em 15%;
        background: #fff;
        box-shadow: 0 3px 3px rgb(0 0 0 / 14%);
      }
    }
  }
`;

