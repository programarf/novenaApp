import styled from "styled-components";

export const AppMain = styled.div`
  background-color: yellow;

  .primary-button{
    background-color: red;
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
