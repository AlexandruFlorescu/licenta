import auth0 from 'auth0-js'
import {AUTH_CONFIG} from './auth0-variables'
import history from './history'

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    responseType: 'token id_token',
    scope: 'openid profile'
  });
  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getManagementToken=this.getManagementToken.bind(this);
  }
  login(){
    // history.replace('/');
    this.auth0.authorize();
  }
  logout(manageToo = false){
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    if(manageToo)
      localStorage.removeItem('manageToken');
    this.userProfile = null;
    if(!manageToo)
      history.replace('/');
  }

  userProfile;

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('No access token found');
    }
    return accessToken;
  }

  getProfile(cb) {
    let accessToken = this.getAccessToken();
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile);
    });
  }
  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if(authResult && authResult.accessToken && authResult.idToken) {
        history.replace('/userProfile');
        this.setSession(authResult);
      }
      else{
        // history.replace('/');
        // this.setSession(authResult);
      }
    })
  }
  isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
  setSession(authResult){
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime() );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // history.replace('/');
  }

  getManagementToken(){
    return fetch('https://seastar.eu.auth0.com/oauth/token',{
        method: 'POST',
        headers: {'content-type': 'application/json',
        'Accept': 'application/json' },
        body: '{"client_id":"nyly8zhnseW2GiWyaENl5qasAlxzEpNz","client_secret":"vp1B33lZcr3WJbVslSn2bgMB3nCy2kiOAhJJXfD4Ed4tKw1H8FHs21y1mCc-IEZi","audience":"https://seastar.eu.auth0.com/api/v2/","grant_type":"client_credentials"}'
      }).then(resp=>resp.json())
        .then(resp=> {
          localStorage.setItem('manageToken','Bearer ' + resp.access_token);
        })
  }

}
