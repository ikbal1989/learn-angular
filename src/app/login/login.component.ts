import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signIn(credintials) {
    console.log(credintials);
    this.authService.login(credintials.value)
        .subscribe( result => {
          if (result) {
            this.router.navigate(['/']);
          } else {
            this.invalidLogin = true;
          }
        });
  }

}
