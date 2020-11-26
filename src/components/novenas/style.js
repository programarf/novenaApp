import styled from "styled-components";

import borderGreen from './../../assets/img/border-green.png';
import borderRed from './../../assets/img/border-red.png';
import borderYellow from './../../assets/img/border-yellow.png';
import chispas from './../../assets/img/chispas.png';
import mascara from './../../assets/img/mascara.png';
import novenaTop from './../../assets/img/novena-top2.png';
import novenaBottom from './../../assets/img/novena-bottom.svg';
import dayTop from './../../assets/img/day-top.png';
import dayBottom from './../../assets/img/day-bottom.png';
import oracionbottom from './../../assets/img/oracion-bottom.png';
import point from './../../assets/img/point.png';

export const StyleNovena = styled.div`
  background: #027334;
  padding: 1em 1.1em;
  z-index: 2;
  position: relative;
  .day-home-wrap {
    height: calc(100 * var(--vh) - 2em);
    padding: 13% 0;
    text-align: center;
    border-style: solid;
    border-width: 10px 10px 10px 10px;
    border-image: url("${borderRed}") 9 9 9 9 repeat repeat;
    border-image-width: 1.2;
    background-image: url("${chispas}"), radial-gradient(#FF1A1A, #AE2424 78%);
    background-position: center, center;
    background-repeat: no-repeat;
    background-size: 182%, 100%;
    background-clip: padding-box;
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
    }
    .list-novena {
      height: 100%;
      max-height: calc(34 * var(--vh));
      overflow-x: hidden;
      overflow-y: scroll;
      margin-top: 1rem;
      a {
        min-width: 50%;
        display: inline-block;
        font-size: 1rem;
        color: #08B761;
        font-weight: 500;
        text-transform: capitalize;
        text-decoration: none;
        border-radius: 20px;
        padding: .5em 1.5em;
        margin-bottom: 7%;
        background: #fff;
        box-shadow: 0 3px 3px rgb(0 0 0 / 14%);
      }
    }
  }
  .comparte {
    p {
      color: white;
      font-weight: 500;
      margin-bottom: 1em;
    }
    a {
      min-width: 57%;
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
      position absolute;
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
export const PortadaDay = styled.div`
  background: url("${mascara}") center/cover no-repeat #AE2424;
  padding: 1em 1.1em 0;
  max-height: calc(100 * var(--vh));
  min-height: calc(100 * var(--vh));
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4em;
    background: url("${novenaTop}") center 88%/96% no-repeat;
    z-index: 1;
  }
  .portada-day {
    text-align: center;
    border-style: solid;
    border-width: 10px 10px 0px 10px;
    border-image: url("${borderGreen}") 9 9 9 9 repeat repeat;
    border-image-width: 1.2;
    background: url("${chispas}"), radial-gradient(#08B761, #08B761, #048938, #027334 78%);
    background-position: center, center;
    background-repeat: no-repeat;
    background-size: 182%, 100%;
    background-clip: padding-box;
    position: relative;
    flex: 1 0 auto;
    &:after {
      content: '';
      width: 117%;
      position: absolute;
      left: 50%;
      bottom: 0;
      height: 7.4em;
      background: url("${novenaBottom}") center top/100% no-repeat;
      transform: translateX(-50%);
      z-index: 1;
    }
    .box {
      margin: 22% 0;
    }
    .title-day {
      margin-top: 22%;
      img {
        width: 100%;
      }
    }
    .papas {
      background-size: 85%;
      background-repeat: no-repeat;
      background-position: center 39%;
      height: calc(30 * var(--vh));
      margin-bottom: 1em;
      margin-top: 1em;
    }
  }
  h2 {
    font-family: Museo Slab;
    font-size: 2.4em;
    color: white;
    font-weight: 900;
    text-shadow: 0 2px rgb(0 0 0 / 51%);
  }
  .btn-buy {
    min-width: calc(100% - 8em);
    display: inline-block;
    font-size: 1rem;
    color: #08B761;
    font-weight: 500;
    text-transform: capitalize;
    text-decoration: none;
    border-radius: 20px;
    padding: .5em 2.5em;
    // margin-top: 1em;
    // margin-bottom: 7%;
    background: #fff;
    box-shadow: 0 3px 3px rgb(0 0 0 / 14%);
  }
`;
export const Tabs = styled.div`
  background: #AE2424;
  padding: 0.5em;
  margin: 0 -1.1em;
  flex: 0 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  a {
    flex: 0 0 50%;
    min-height: 4.1em;
    display: flex;
    align-items: center;
    position relative;
    font-size: .9rem;
    color: #fff;
    font-weight: 300;
    text-align: left;
    text-decoration: none;
    text-transform: capitalize;
    padding: .5em 2em;
    &:first-child::before {
      content: "";
      width: 12px;
      height: 12px;
      border: 0;
      border-bottom: 3px solid #fff;
      border-left: 3px solid #fff;
      border-radius: 3px;
      position: absolute;
      top: 50%;
      left: 5%;
      transform: translateY(-50%) rotate(45deg);
      z-index: 2;
      cursor: pointer;
    }
    &:last-child::before {
      content: "";
      width: 12px;
      height: 12px;
      border: 0;
      border-bottom: 3px solid #fff;
      border-right: 3px solid #fff;
      border-radius: 3px;
      position: absolute;
      top: 50%;
      left: unset;
      right: 5%;
      transform: translateY(-50%) rotate(-45deg);
      z-index: 2;
      cursor: pointer;
    }
    &[href^="#"] {
      pointer-events: none;
      &::before {
        content: none;
      }
    }
  }
  a:last-child {
    border-left: 1px solid #D66C6C;
  }
`;
export const Oracion = styled.div`
  position: relative;
  min-height: calc(100 * var(--vh));
  max-height: calc(100 * var(--vh));
  padding: 1em 1.1em 0;
  background: url("${mascara}") center/cover no-repeat #AE2424;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 3;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4em;
    background: url("${novenaTop}") center 88%/96% no-repeat;
    z-index: 2;
  }
  .day-detail {
    // height: calc(100vh - 4em);
    padding: 13% 0 0;
    text-align: center;
    border-style: solid;
    border-width: 10px 10px 0px 10px;
    border-image-width: 1.2;
    border-image: url("${borderYellow}") 9 9 9 9 repeat repeat;
    background: radial-gradient(#F3F2E6, #F3F2E6);
    background-position: center, center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-clip: padding-box;
    position: relative;
    flex: 1 0 auto;
    &:after {
      content: '';
      width: 124%;
      position: absolute;
      left: 50%;
      bottom: 0;
      height: 6.3em;
      background: url("${oracionbottom}") center top/100% no-repeat;
      transform: translateX(-50%);
      z-index: 1;
    }
    .menu-oracion a {
      color: #AE2424;
      font-weight: 300;
      text-align: right;
      text-decoration: none;
      display: flex;
      justify-content: flex-end;
      padding: 1em 0;
      &:after {
        content: '';
        display: block;
        width: 17px;
        height: 18px;
        background: url("${point}") center left/100% no-repeat;
        margin-left: 10px;
      }
    }
    .img-oraci img{
      width: 90%;
      margin-bottom: 1em
    }
    .conte-text {
      height: calc(100 * var(--vh) - 7.4em - 12em);
      overflow-x: hidden;
      overflow-y: scroll;
      position: relative;
      strong {
        font-family: Museo Slab;
        font-weight: 700;
        color: #545454;
      }
      p {
        color: #545454;
        text-align: left;
        font-weight: 300;
        line-height: 1.5;
        padding: 0 1em;
        margin-bottom: 1em;
      }
    }
    .gradient {
      width: 100%;
      height: 4em;
      background: linear-gradient(0deg,#F3F2E6,#0000);
      transform: translateY(-4em);
    }
    .img-secons {
      width: 37%;
      height: 23%;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  // .conte-text:after {
  //   content: '';
  //   position: absolute;
  //   bottom: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 20px;
  //   background-image: linear-gradient(0deg,#f3f2e6d1 3%,#F3F2E6,#0000);
  // }
`;
export const MenuOraciones = styled.div`
  min-height: calc(100 * var(--vh));
  max-height: calc(100 * var(--vh));
  position: relative;
  background: #027334;
  padding: 1em 1.1em;
  z-index: 2;
  .img-comparte img {
    width: 80%;
  }
  .grip-oracio {
    height: calc(100vh - 2em);
    padding: 13% 0;
    text-align: center;
    border-style: solid;
    border-width: 10px 10px 10px 10px;
    border-image: url("${borderRed}") 9 9 9 9 repeat repeat;
    border-image-width: 1.2;
    background-image: url("${chispas}"), radial-gradient(#FF1A1A, #AE2424 78%);
    background-position: center, center;
    background-repeat: no-repeat;
    background-size: 182%, 100%;
    background-clip: padding-box;
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
    .navbar {
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
    .menu-oracion {
      height: calc(40 * var(--vh));
      overflow-x: hidden;
      overflow-y: scroll;
      margin-bottom: 1rem;
    }
  }
  .menu-oracion a {
    min-width: calc(100% - 3em);
    display: inline-block;
    font-size: 1rem;
    color: #08B761;
    font-weight: 500;
    text-transform: capitalize;
    text-decoration: none;
    border-radius: 20px;
    padding: .5em 1.5em;
    margin-bottom: 7%;
    background: #fff;
    box-shadow: 0 3px 3px rgb(0 0 0 / 14%);
  }
  .comparte {
    p {
      color: white;
      font-weight: 500;
      margin-bottom: 1em;
    }
    a {
      min-width: 50%;
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