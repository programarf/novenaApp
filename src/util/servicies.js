class Services {

  MenuMain = async(url) => {
    const myHeaders = {
      //"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      "Access-Control-Allow-Origin": "*" ,
      "Access-Control-Allow-Methods": "GET",
      "content-type": "application/json"
    };
    const myInit = {
      // mode: 'no-cors',
      method: 'GET',
      headers: myHeaders,
      cache: 'default'
    };
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const response = await fetch(proxyUrl + url, myInit) ;
    const posts = await response.json();
    return posts;
  }
}
export default Services;
