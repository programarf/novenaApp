const APP_DOMAIN  = 'http://novena.lndo.site';
const Constants = {
  APP_DOMAIN : APP_DOMAIN,
  APP_DOMAIN_POST_DETAIL : APP_DOMAIN + '/rest/novena/',
  APP_DOMAIN_POSTS : APP_DOMAIN + '/rest/novena/all',

  APP_PRAYERS_POSTS : APP_DOMAIN + '/rest/oraciones/',
  APP_PRAYER_POSTS : APP_DOMAIN + '/rest/oracion/',

  APP_CHRISTMAS_CAROLS_POSTS: APP_DOMAIN + '/rest/villancicos/all',


  APP_DOMAIN_USER_LOGIN : APP_DOMAIN + '/user/login?_format=json',
  APP_DOMAIN_USER_REGISTER : APP_DOMAIN + '/user/register?_format=json',
  APP_DOMAIN_USER_INFO : APP_DOMAIN + '/jsonapi/user/user'
}
export default Constants;