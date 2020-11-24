class Services {

  MenuMain = async(url) => {
    let obj = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    };
    const myHeaders = {
      'Content-Type': 'application/json',
      /* "Access-Control-Request-Headers": "Content-Type",
      "Access-Control-Request-Origin": "*" ,
      "Access-Control-Request-Method": "OPTIONS,POST,GET",
      "Access-Control-Request-Credentials": false, */
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "http://localhost:3001",
      "Access-Control-Allow-Methods": "OPTIONS,POST",
      "Access-Control-Allow-Credentials": false,
    };
    const myInit = {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default'
    };
    const response = await fetch(url, myInit) ;
    const posts = await response.json();
    return posts;
  }
}
export default Services;
