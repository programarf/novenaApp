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
  @media (max-width: 768px){
    min-height: 100vh
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
  .day-home-wrap {
    height: calc(100vh - 2em);
    padding: 13% 0;
    text-align: center;
    border-style: solid;
    border-width: 10px 10px 10px 10px;
    border-image: url("${borderRed}") 9 9 9 9 repeat repeat;
    background-image: url("${chispas}"), radial-gradient(#FF1A1A, #AE2424 78%);
    background-position: center, center;
    background-repeat: no-repeat;
    background-size: 182%, cover;
  }
  .day-home-wrap:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4em;
    background: url("${dayTop}") center bottom/100% no-repeat;
  }
  .day-home-wrap:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4.4em;
    background: url("${dayBottom}") center top/119% no-repeat;
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
    position absolute;
    top: -5px;
    left: -5px;
    width: 14px;
    height: 14px;
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
    border-radius: 3px;
  }
`;
export const PortadaDay = styled.div`
  background: url("${mascara}") center/cover no-repeat #AE2424;
  padding: 1em 1.1em;
  z-index: 2;
  position: relative;
  @media (max-width: 768px){
    min-height: 100vh
  }
  .portada-day {
    height: calc(100vh - 2em - 0.5em - 1.5em);
    padding: 22% 0;
    text-align: center;
    border-style: solid;
    border-width: 10px 10px 10px 10px;
    border-image: url("${borderGreen}") 9 9 9 9 repeat repeat;
    background: url("${chispas}"), radial-gradient(#08B761, #08B761, #048938, #027334 78%);
    background-position: center, center;
    background-repeat: no-repeat;
    background-size: 182%, cover;
  }
  .portada-day:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4em;
    // background: url("${novenaTop}") center bottom/100% no-repeat;
    background: url("${novenaTop}") center 88%/96% no-repeat;
  }
  .portada-day:after {
    content: '';
    position: absolute;
    bottom: calc(2.5em + 1.9em);
    left: 0;
    width: 100%;
    height: 7.4em;
    background: url("${novenaBottom}") center top/100% no-repeat;
  }
  h2 {
    font-size: 2.7em;
    color: white;
    font-weight: 900;
    text-shadow: 0 2px rgb(0 0 0 / 51%);
  }
  .btn-buy,
  .list-novena a {
    min-width: calc(100% - 8em);
    display: inline-block;
    font-size: 1rem;
    color: #08B761;
    text-transform: capitalize;
    text-decoration: none;
    border-radius: 20px;
    padding: .5em 2.5em;
    margin-top: 1em;
    margin-bottom: 7%;
    background: #fff;
    box-shadow: 0 3px 3px rgb(0 0 0 / 14%);
  }
`;
export const Tabs = styled.div`
  background: #AE2424;
  padding: 0.5em;
  margin: 0 -1.1em;
  display: flex;
  justify-content: flex-end;
  box-shadow: 0 0 0 5px #AE2424;
  a {
    flex: 0 0 50%;
    text-decoration: none;
    display: block;
    padding: .5em 1em;
    color: #fff;
  }
  a:last-child {
    border-left: 1px solid #D66C6C;
  }
`;
export const Oracion = styled.div`
  background: url("${mascara}") center/cover no-repeat #AE2424;
  padding: 1em 1.1em;
  z-index: 2;
  position: relative;
  @media (max-width: 768px){
    min-height: 100vh
  }
  .novena-detail {
    height: calc(100vh - 4em);
    padding: 13% 0;
    text-align: center;
    border-style: solid;
    border-width: 10px 10px 10px 10px;
    border-image: url("${borderYellow}") 9 9 9 9 repeat repeat;
    background: radial-gradient(#F3F2E6, #F3F2E6);
    background-position: center, center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .menu-oracion a {
    color: #AE2424;
    text-decoration: none;
    display: flex;
    justify-content: flex-end;
    text-align: right;
    padding: 1em 0;
  }
  .menu-oracion a:after {
    content: '';
    display: block;
    width: 17px;
    height: 18px;
    background: url("${point}") top left/100% no-repeat;
    margin-left: 10px;
  }
  .img-oraci img{
    width: 90%;
    margin-bottom: 1em
  }
  .conte-text {
    height: 60%;
    overflow-x: hidden;
    overflow-y: scroll;
    position: relative;
  }
  .conte-text:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20px;
    background-image: linear-gradient(0deg,#f3f2e6d1 3%,#F3F2E6,#0000);
  }
  .conte-text p {
    font-family: 'Museo Slab';
    font-weight: 300;
    color: #545454;
    text-align: left;
    line-height: 1.5;
    padding: 0 1em;
  }
  .novena-detail:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4em;
    background: url("${novenaTop}") center 88%/96% no-repeat;
  }
  .novena-detail:after {
    content: '';
    position: absolute;
    bottom: 4.4em;
    left: 0;
    width: 100%;
    height: 7.4em;
    background: url("${oracionbottom}") center top/115% no-repeat;
  }
`;
export const MenuOraciones = styled.div`
  background: #027334;
  padding: 1em 1.1em;
  z-index: 2;
  position: relative;
  @media (max-width: 768px){
    min-height: 100vh
  }
  .close {
    display: inline-block;
    float: right;
    text-decoration: none;
    margin: .5em;
  }
  .navbar {
    margin-bottom: 1em;
    clear: both;
    display: block;
    overflow: hidden;
  }
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
    background-image: url("${chispas}"), radial-gradient(#FF1A1A, #AE2424 78%);
    background-position: center, center;
    background-repeat: no-repeat;
    background-size: 182%, cover;
  }
  .grip-oracio:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4em;
    background: url("${dayTop}") center bottom/100% no-repeat;
  }
  .grip-oracio:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4.4em;
    background: url("${dayBottom}") center top/119% no-repeat;
  }
  .comparte a,
  .menu-oracion a {
    min-width: calc(100% - 3em);
    display: inline-block;
    font-size: 0.8rem;
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
    position absolute;
    top: -5px;
    left: -5px;
    width: 14px;
    height: 14px;
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
    border-radius: 3px;
  }
`;