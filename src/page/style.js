import styled from "styled-components";

import border from './../assets/img/border-green.png';
import mascara from './../assets/img/mascara.png';
import chispas from './../assets/img/chispas.png';
import Ballstop from './../assets/img/balls-top.png';
import BallsBottom from './../assets/img/balls-bottom.png';

export const AppContent = styled.div`
  // position: relative;
  // overflow: hidden;
  // margin: 0 auto;
  // max-width: 500px;
`;

export const AppMain = styled.div`
  background: url("${mascara}") center/cover no-repeat #AE2424;
  padding: 1em 1.1em;
  position: relative;
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
    height: calc(100 * var(--vh) - 2em);
    padding: 13% 0;
    text-align: center;
    border-style: solid;
    border-width: 10px 10px 10px 10px;
    border-image: url("${border}") 9 9 9 9 repeat repeat;
    background: url("${chispas}"), radial-gradient(#08B761, #08B761, #048938, #027334 78%);
    background-position: center, center;
    background-repeat: no-repeat;
    background-size: 182%, 101%;

  }
  .picture {
    margin-top: 2em;
    img {
      width: 100%
    }
  }
  .columns {
    display flex;
    margin: 1.5em auto 0;
    .columns-items {
      flex: 0 0 50%;
      img {
        width: 70%;
      }
    }
  }
  .button-menu {
    padding-top: .5em;
    overflow: hidden;
    ul {
      height: calc(20 * var(--vh));
      overflow-x: hidden;
      overflow-y: scroll;
      a {
        min-width: 70%;
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
        &[href^="/descarga-farolito"] {
          background: #EC020B;
          color: white;
          font-size: 0.8rem;
          padding: .7em 2.5em;
          &:hover {
            background: white;
            color: #EC020B;
          }
        }
      }
    }
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
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

export const BtnMain = styled.button`
  z-index: 3;
  display: block;
  position: absolute;
`;