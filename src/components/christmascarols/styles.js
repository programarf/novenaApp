import styled from "styled-components";
import next from './../../assets/img/next.svg';
import borderRed from './../../assets/img/border-red.png';
import point from './../../assets/img/point-white.png';
import novenaTop from './../../assets/img/day-top.png';

export const AudioPlayerStyle = styled.div`
  background-color: #027334;
  width: 90%;
  position: relative;
  margin: 1em auto;
  padding: 16px 20px;
  border-radius: 13px;
  #audio_player{
    display: flex;
    flex-direction: column;
    .audio_controls{
      order: 3;
      z-index: 3;
      .paused{
        .ivrplaybtn{
          display: flex;
        }
        .ivrpausebtn{
          display: none;
        }
      }
      .ivrplaybtn{
        display: none;
      }
      .ivrpausebtn{
        display: flex;
      }
      .play_pause_inner {
        margin-top: .5em;
      }
      .ivrpausebtn,
      .ivrplaybtn{
        max-width: 41px;
        height: 41px;
        padding: 9px 0;
        border-radius: 50%;
        background: white;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        cursor: pointer;
        #Shape{
          fill: #AE2424;
        }
        #Path{
          fill: #AE2424;
        }
      }
      .spinner{
        display: none;
      }
      .reload-icon{
        display: none;
      }
    }
    #audio_time_progress{
      order: 2;
      color: white;
      font-size: 14px;
      padding-top: .5em;
    }
    #audio_progress_container{
      order: 1;
      background-color: white;
      #audio_progress {
        height: 4px;
        background-color: #AE2424 !important;
      }
      .audio_info {
        display: none;
      }
    }
    .btn {
      display: none;
    }
  }
  .flex-row{
    > div {
      width: 20px;
      color: white;
      cursor: pointer;
      height: 30px;
      display: inline-block;
      &.prev {
        background-image: url(${next});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 30px;
        transform: rotate(180deg);
        position: absolute;
        bottom: 25%;
        left: 20%;
        z-index: 4;
      }
      &.next {
        background-image: url(${next});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 30px;
        position: absolute;
        bottom: 25%;
        right: 20%;
        z-index: 4;
      }
    }
  }
`;
export const Villancicos = styled.div`
  background: #027334;
  padding: 1em 1.1em;
  z-index: 2;
  position: relative;
  min-height: calc(100 * var(--vh));
  max-height: calc(100 * var(--vh));
  .detail-chismacols {
    height: calc(100 * var(--vh) - 2em);
    padding: 13% 0 0;
    text-align: center;
    border-style: solid;
    border-width: 10px 10px 10px 10px;
    border-image: url("${borderRed}") 9 9 9 9 repeat repeat;
    border-image-width: 1.2;
    background: radial-gradient(#FF1A1A,#AE2424 78%);
    background-position: center, center;
    background-repeat: no-repeat;
    background-size: 101%;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4em;
      background: url("${novenaTop}") center bottom/100% no-repeat;
    }
    .menu-oracion a {
      color: #FFFFFF;
      text-decoration: none;
      display: flex;
      justify-content: flex-end;
      text-align: right;
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
    img {
      width: 90%;
      margin-bottom: 1em
    }
    .conte-text {
      height: calc(100 * var(--vh) - 18em);
      overflow-x: hidden;
      overflow-y: scroll;
      position: relative;
      p {
        color: #FFFFFF;
        text-align: center;
        line-height: 1.5;
        padding: 0 1em;
        strong{
          display: block;
          font-family: 'Museo Slab';
          font-weight: 700;
          color: #FFE100;
        }
      }
    }
  }
`;