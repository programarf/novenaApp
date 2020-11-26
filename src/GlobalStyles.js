import styled, { createGlobalStyle } from 'styled-components';
import MuseoSans300Otf from './assets/fonts/Museo_sans/MuseoSans-300.otf';
import MuseoSans300Woff from './assets/fonts/Museo_sans/MuseoSans-300.woff';
import MuseoSans300Woff2 from './assets/fonts/Museo_sans/MuseoSans-300.woff2';
import MuseoSans500Otf from './assets/fonts/Museo_sans/MuseoSans_500.otf';
import MuseoSans500Woff from './assets/fonts/Museo_sans/MuseoSans_500.woff';
import MuseoSans500Woff2 from './assets/fonts/Museo_sans/MuseoSans_500.woff2';
import MuseoSlab700Otf from './assets/fonts/Museo_slab/Museo_Slab_700.otf';
import MuseoSlab700Woff from './assets/fonts/Museo_slab/Museo_Slab_700.woff';
import MuseoSlab700Woff2 from './assets/fonts/Museo_slab/Museo_Slab_700.woff2';
import MuseoSlab900Otf from './assets/fonts/Museo_slab/Museo_Slab_900.otf';
import MuseoSlab900Woff from './assets/fonts/Museo_slab/Museo_Slab_900.woff';
import MuseoSlab900Woff2 from './assets/fonts/Museo_slab/Museo_Slab_900.woff2';

export const LiItem = styled.li`
  //background-color:  ${props => props.theme.fg};;
  border-radius: 20px;
  list-style: none;
  //color:  ${props => props.theme.c};
  a{
    color: ${props => props.primary ? "red" : "palevioletred"};
  }
  .button-menu {
    padding: 2em 0;
  }
`;

document.querySelector(':root').style.setProperty('--vh', window.innerHeight/100 + 'px');
window.addEventListener('resize', () => {
  document.querySelector(':root').style.setProperty('--vh', window.innerHeight/100 + 'px');
});
// document.querySelector(':root').style.setProperty('--vh', window.innerHeight/100 + 'px');
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Museo Sans';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url("https://use.typekit.net/af/620bf8/00000000000000000000e7fe/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff2"),
    url('${MuseoSans300Otf}') format("opentype"),
    url('${MuseoSans300Woff}') format('woff'),
    url('${MuseoSans300Woff2}') format('woff2');
  }
  @font-face {
    font-family: 'Museo Sans';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url("https://use.typekit.net/af/a28b50/00000000000000000000e803/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"),
    url('${MuseoSans500Otf}') format("opentype"),
    url('${MuseoSans500Woff}') format('woff'),
    url('${MuseoSans500Woff2}') format('woff2');
  }
  @font-face {
    font-family: 'Museo Slab';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('${MuseoSlab700Otf}') format("opentype"),
    url('${MuseoSlab700Woff}') format('woff'),
    url('${MuseoSlab700Woff2}') format('woff2');
  }
  @font-face {
    font-family: 'Museo Slab';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url('${MuseoSlab900Otf}') format("opentype"),
    url('${MuseoSlab900Woff}') format('woff'),
    url('${MuseoSlab900Woff2}') format('woff2');
  }
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }
  li {
    list-style: none;
  }

  button: {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    width: 100%;
    max-width: 500px;
    font-family: 'Museo Sans', sans-serif;
    font-weight: 300;
    background: #fefefe;
    margin: 0 auto;
    overscroll-behavior: none;
  }
  #root {
    overflow: hidden;
    max-width: 100vw;
  }
  .App > div {
    height: calc(100 * var(--vh));
    display: block;
    position: relative;
    overflow: hidden;
    // div {
    //   height: 100%;
    //   display: block;
    // }
  }
  // #app {
  //   box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  //   overflow-x: hidden;
  //   // min-height: 100vh;
  //   padding-bottom: 10px;
  // }

  li${LiItem}{
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border-style: none;
    user-select: none;
  }

  article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
  }

  // ----| icons menu |----
  .navbar-toggler {
    padding: 5px;
    line-height: 1;
    font-size: 1.25rem;
    background-color: #0000;
    border: 1px solid #0000;
    float: left;
  }
  .navbar-toggler:focus {
    outline: transparent;
  }
  .navbar-toggler .navbar-toggler-icon {
    position: relative;
    display: inline-block;
    width: 26px;
    height: 4px;
    vertical-align: middle;
    text-transform: uppercase;
    text-indent: -55px;
    background: white;
    transition: all .2s ease-out;
    border-radius: 14px;
  }
  .navbar-toggler .navbar-toggler-icon::before,
  .navbar-toggler .navbar-toggler-icon::after {
    content: '';
    width: 26px;
    height: 4px;
    background: white;
    position: absolute;
    left: 0;
    transition: 0.2s;
    border-radius: 14px;
  }
  .navbar-toggler .navbar-toggler-icon::before {
    top: -0.4em;
  }
  .navbar-toggler .navbar-toggler-icon::after {
    bottom: -0.4em;
  }
  // Click
  .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
    background: transparent;
    transform: rotate(180deg);
    transition: all ease .9s;
  }
  .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon::before {
    transform: rotate(45deg);
    top: 0;
  }
  .navbar-toggler[aria-expanded="true"].navbar-toggler-icon::after {
    transform: rotate(-45deg);
    bottom: 0;
  }
  .loading-car{
    width: 100%;
    height: calc(100 * var(--vh));
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }
  .hidden{
    display: none !important;
  }
  .show{
    display: block !important;
  }
`;
