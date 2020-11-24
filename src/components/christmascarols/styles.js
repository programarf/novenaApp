import styled from "styled-components";
import next from './../../assets/img/next.svg';
import borderRed from './../../assets/img/border-red.png';
import point from './../../assets/img/point-white.png';
import novenaTop from './../../assets/img/novena-top2.png';

export const AudioPlayerStyle = styled.div`
  background-color: #027334;
  width: 90%;
  margin: 1em auto;
  padding: 16px 20px;
  border-radius: 13px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  // left: 0;
  // right: 0;
  // bottom: 10%;
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
      #audio_progress{
        height: 4px;
        background-color: #AE2424 !important;
      }
      .audio_info{
        display: none;
      }
    }
    .btn{
      display: none;
    }
  }
  .flex-row{
    // display: flex;
    // justify-content:center;
    //position: absolute;
    // width: 100%;
    // left: 0;
    //bottom: 27px;
    >div{
      width: 20px;
      color: white;
      cursor: pointer;
      height: 30px;
      display: inline-block;
      &.prev{
        background-image: url(${next});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 30px;
        transform: rotate(180deg);
        position: absolute;
        bottom: 25%;
        left: 20%;
      }
      &.next{
        background-image: url(${next});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 30px;
        position: absolute;
        bottom: 25%;
        right: 20%;
      }
    }
  }
`;
export const Villancicos = styled.div`
  background: #027334;
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
    border-image: url("${borderRed}") 9 9 9 9 repeat repeat;
    background: radial-gradient(#FF1A1A,#AE2424 78%);
    background-position: center, center;
    background-repeat: no-repeat;
    background-size: 101%;
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
  .conte-text p {

    color: #FFFFFF;
    text-align: center;
    line-height: 1.5;
    padding: 0 1em;
    strong{
      font-family: 'Museo Slab';
      font-weight: 700;
      color: #FFE100;
    }
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
`;