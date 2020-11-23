import styled from "styled-components";

import borderGreen from './../../assets/img/border-green.png';
import borderRed from './../../assets/img/border-red.png';
import borderYellow from './../../assets/img/border-yellow.png';
import chispas from './../../assets/img/chispas.png';
import mascara from './../../assets/img/mascara.png';
import novenaTop from './../../assets/img/novena-top.svg';
import novenaBottom from './../../assets/img/novena-bottom.svg';
import dayTop from './../../assets/img/day-top.png';
import dayBottom from './../../assets/img/day-bottom.png';

export const StyleNovena = styled.div`
  background: #027334;
  padding: 1em 1.1em;
  z-index: 2;
  position: relative;
  @media (max-width: 768px){
    min-height: 100vh
  }
  .close {
    color: white;
    text-decoration: none;
    margin-bottom: 1.5em;
    display: inline-block;
  }
  .day-home-wrap {
    height: calc(100vh - 2em);
    padding: 13% 0;
    text-align: center;
    border-style: solid;
    border-width: 10px 10px 10px 10px;
    border-image: url("${borderRed}") 9 9 9 9 repeat repeat;
    background: radial-gradient(#FF1A1A, #AE2424 78%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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
    background: url("${dayBottom}") center top/100% no-repeat;
  }
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
    height: calc(100vh - 2em);
    padding: 13% 0;
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
    height: 6.5em;
    background: url("${novenaTop}") center bottom/100% no-repeat;
  }
  .portada-day:after {
    content: '';
    position: absolute;
    bottom: 0;
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

export const Oracion = styled.div`
  background: url("${mascara}") center/cover no-repeat #AE2424;
  padding: 1em 1.1em;
  z-index: 2;
  position: relative;
  @media (max-width: 768px){
    min-height: 100vh
  }
  .novena-detail {
    height: calc(100vh - 2em);
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
  .novena-detail:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6.5em;
    background: url("${novenaTop}") center bottom/100% no-repeat;
  }
  .novena-detail:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 7.4em;
    background: url("${novenaBottom}") center top/100% no-repeat;
  }
`;