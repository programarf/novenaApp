class Services {

  MenuMain = async(url) => {
    console.log(url);
    const response = await fetch(url);
    const posts = await response.json();
    return posts;
  }
}
export default Services;
