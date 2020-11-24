import styled, { createGlobalStyle } from 'styled-components';

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


export const GlobalStyle = createGlobalStyle`
  @import url('./assets/css/style-fonts.css');
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

  button: {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    width: 100%;
    height: 100vh;
    background: #fefefe;
    margin: 0 auto;
    max-width: 500px;
    overscroll-behavior: none;
    font-family: 'Museo Sans', sans-serif;
    font-weight: 300;
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }

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
  .loading {
    width: 100%;
    height: 100vh;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }
`;
