import styled from "styled-components";

import border from './../assets/img/border-green.png';
import mascara from './../assets/img/mascara.png';
import chispas from './../assets/img/chispas.png';
import Ballstop from './../assets/img/balls-top.png';
import BallsBottom from './../assets/img/balls-bottom.png';

export const AppContent = styled.div`
  position: relative;
  overflow: hidden;
  // margin: 0 auto;
  // max-width: 500px;
`;

export const AppMain = styled.div`
  background: url("${mascara}") center/cover no-repeat #AE2424;
  padding: 1em 1.1em;
  position: relative;
  @media (max-width: 768px){
    min-height: 100vh;
    max-height: 100vh;
  }
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4em;
    background: url("${Ballstop}") center bottom/100% no-repeat;
  }
  :after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 7em;
    background: url("${BallsBottom}") center top/106% no-repeat;
  }
  .wrapper {
    height: 100%;
    max-height: calc(100vh - 2em);
    // max-height: calc(100vh - 2em - 9px);
    padding: 13% 0;
    text-align: center;
    border: 10px solid transparent;
    border-image:9 round url("${border}");
    background: url("${chispas}"), radial-gradient(#08B761, #08B761, #048938, #027334 78%);
    background-position: center, center;
    background-repeat: no-repeat;
    background-size: 182%, cover;
  }
  .overflow {
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .picture {
    margin-top: 2em;
  }
  .picture img {
    width: 100%
  }
  .columns {
    display flex;
    margin: 1.5em auto 0;
  }
  .columns-items {
    flex: 0 0 50%;
  }
  .columns-items img {
    width: 70%;
  }
  .button-menu {
    margin: 5% 0 15%;
    overflow-x: hidden;
    overflow-y: scroll;
    height: calc(100vh - 122vw);
    padding-top: .5em;
  }
  .button-menu a {
    min-width: 63%;
    display: inline-block;
    font-size: 1rem;
    color: #08B761;
    text-transform: capitalize;
    text-decoration: none;
    border-radius: 20px;
    padding: .5em 2.5em;
    margin-bottom: 1em;
    background: #fff;
    box-shadow: 0 3px 3px rgb(0 0 0 / 14%);
  }
  .button-menu a[href^="/descarga-farolito"] {
    background: transparent;
    color: white;
    border-radius: none;
    box-shadow: none;
    text-decoration: underline;
  }
  .button-menu a[href^="/descarga-farolito"]:hover {
    background: transparent;
    color: white;
  }
  .button-menu a:hover {
    background: #EC020B;
    color: white;
  }
`;

export const Title = styled.h1`
  color: orange;
`;

export const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    background-color: #b4f2c7;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export const BtnMain = styled.button`
  z-index: 3;
  display: block;
  position: absolute;
`;