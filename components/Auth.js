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
    scope: 'openid user_metadata profile'
  });
  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
  }
  login(){
    // history.replace('/');
    this.auth0.authorize();
  }
  logout(){
    localStorage.removeItem('acces_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.userProfile = null;
    history.replace('/');
  }

  userProfile;

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    console.log(accessToken);
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

  getMetadata(cb){
    let accessToken = this.getAccessToken();
    this.auth0.client.userMetadata(accessToken, (err, metadata)=>{
      if(metadata){
        return metadata;
      }
      cb(err, metadata);
    })
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if(authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/');
      }
      else{
        console.log('failed here');
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
    history.replace('/');
  }
}
