import React from 'react';
import Constants from '../constants/constants';

class Services {

  MenuMain = async() => {
    let url = Constants.APP_MENU_MAIN;
    /*   let data;
      console.log(url);
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log("data", data);
          //datas.push(data);
        }
        .then(function (resultadoFinal) {
          console.log('Obtenido el resultado final: ' + resultadoFinal);
        })
      console.log("data 2", data);
      //return datas
      return data */
    //return fetch(url).then(response => response.json());
/*     fetch(url)
      .then(response => {
        if (response.ok) return response.json();
        console.log(response.json);
      }) */
    const response = await fetch(url);

    const posts = await response.json();
    console.log("posts", posts);

    return posts;

  }

}
export default Services;
