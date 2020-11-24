class Services {

  MenuMain = async(url) => {
    const myHeaders = {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "https://dev-navidad.pantheonsite.io",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
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
