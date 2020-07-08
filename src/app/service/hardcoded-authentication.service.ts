import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }

  authenticate(username, password) {
    //console.log('before ' + this.isUserLoggedIn());
    if(username==="pankaj" && password === 'dummy') {
      sessionStorage.setItem('authenticaterUser', username);
      //console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser');
    this.basicAuthenticationService.authenticatedUserName = '';
  }

}
