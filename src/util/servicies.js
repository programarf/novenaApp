import React from 'react';
import Constants from '../constants/constants';

class Services {

  MenuMain() {
    let url = Constants.APP_MENU_MAIN;
    let datas= [];
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        datas.push(data);
      });
      console.log(datas);
    return datas

  }

}
export default Services;
