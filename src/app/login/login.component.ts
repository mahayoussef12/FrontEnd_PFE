import { Component, OnInit } from '@angular/core';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService} from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
  }
  loginWithGoogle() :void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
  }
  loginWithFacebook():void{
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID)
  }
}
