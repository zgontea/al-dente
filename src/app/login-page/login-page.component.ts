import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public loginValid = true;
  public username = '';
  public password = '';

  imageSrc = '../assets/logo-removebg.png';
  
  constructor() { }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
  }

  public onSubmit(): void {
  }
}
