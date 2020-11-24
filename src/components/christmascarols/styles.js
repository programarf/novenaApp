import styled from "styled-components";
import next from './../../assets/img/next.svg';

export const AudioPlayerStyle = styled.div`
  background-color: #027334;
  width: 80%;
  margin: 20px auto;
  padding: 16px 20px;
  border-radius: 13px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 10%;
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
      .ivrpausebtn,
      .ivrplaybtn{
        background: white;
        max-width: 45px;
        padding: 9px 0;
        border-radius: 50%;
        height: 45px;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        cursor: pointer;
        #Shape{
          fill: #EC020B;
        }
        #Path{
          fill: #EC020B;
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
    }
    #audio_progress_container{
      order: 1;
      background-color: white;
       #audio_progress{
        height: 4px;
        background-color: #EC020B !important;
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
    display: flex;
    justify-content:center;
    //position: absolute;
    width: 100%;
    left: 0;
    //bottom: 27px;
    >div{
      width: 50%;
      color: white;
      cursor: pointer;
      height: 30px;
      &.prev{
        background-image: url(${next});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 30px;
        transform: rotate(180deg);
      }
      &.next{
        background-image: url(${next});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 30px;
      }
    }
  }
`;

export const Bodytext = {

};

export const NovenaDetail = styled.div`
  strong{
    color: yellow;
  }
`;