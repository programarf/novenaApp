const APP_DOMAIN = 'https://dev-navidad.pantheonsite.io';

const Constants = {
  APP_DOMAIN : APP_DOMAIN,
  APP_DOMAIN_POST_DETAIL : APP_DOMAIN + '/rest/novena/',
  APP_DOMAIN_POSTS : APP_DOMAIN + '/rest/novena/all',

  APP_PRAYERS_POSTS : APP_DOMAIN + '/rest/oraciones/',
  APP_PRAYER_POSTS : APP_DOMAIN + '/rest/oracion/',

  APP_URL_AUDIOS: APP_DOMAIN + '/sites/default/files/2020-11/',
  APP_CHRISTMAS_CAROLS_POSTS: APP_DOMAIN + '/rest/villancicos/all',
  APP_CHRISTMAS_CAROLS_DETAILS: APP_DOMAIN + '/rest/villancico/',

  APP_CHRISTMAS_RECIPES_POSTS: APP_DOMAIN + '/rest/resetas/all',
  APP_CHRISTMAS_RECIPES_DETAILS: APP_DOMAIN + '/rest/reseta/',


  APP_DOMAIN_USER_LOGIN : APP_DOMAIN + '/user/login?_format=json',
  APP_DOMAIN_USER_REGISTER : APP_DOMAIN + '/user/register?_format=json',
  APP_DOMAIN_USER_INFO : APP_DOMAIN + '/jsonapi/user/user'
}
export default Constants;