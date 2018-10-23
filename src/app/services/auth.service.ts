import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

  loginUrl = 'http://localhost/laravel_tokenizer/public/api/login';

  constructor(private http:Http) { }

  login(credintials) {
    return this.http.post(this.loginUrl, credintials)
               .pipe(map(response => {
                  let result = response.json();
                  if (result && result.token) {
                    localStorage.setItem('token', result.token);
                  }
                  console.log(result);
                }));
  }

  logout() {

  }

  isLoggedIn() {


  }

}
