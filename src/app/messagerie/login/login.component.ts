import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/service/user.service';
import {

  FacebookLoginProvider,
  GoogleLoginProvider, SocialAuthService, SocialUser
} from 'angularx-social-login';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    message!: string;
    private user!: SocialUser;
  username: any;

    constructor(private router: Router,
        private userService: UserService,
                private socialAuthService: SocialAuthService) { }

    ngOnInit() {
        this.socialAuthService.authState.subscribe((prod:any) => {
            if (prod != null) {
                this.connect(prod.name);
            }
        });
    }

    connect(username: string) {
        this.clearData();
        if (username === null || username === undefined || username === '') {
            this.message = 'You must enter a username';
            return;
        }

        this.userService.login({ 'id': null, 'username': username })
            .subscribe(
                (res: any) => {
                    sessionStorage.setItem('user', username);
                    this.router.navigate(['home']);
                },
                (error: { error: string; }) => {
                    this.message = error.error;
                });
    }

    signInWithGoogle(): void {
        this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    signInWithFB(): void {
        this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    clearData() {
        sessionStorage.removeItem('user');
        this.message = "null";
    }

}
