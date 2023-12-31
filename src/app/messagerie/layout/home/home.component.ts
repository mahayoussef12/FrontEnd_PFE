import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/service/user.service';
import { RxStompService } from '@stomp/ng2-stompjs';
import { SocialAuthService} from 'angularx-social-login';

@Component({
    selector: 'wt-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 receiver!: string;
 username!: string ;



    constructor(private router: Router, private userService: UserService
        , private stompService: RxStompService, private authService: SocialAuthService) {
    }

    ngOnInit() {
        //this.username = sessionStorage.getItem('user');
        if (this.username === '') {
            this.router.navigate(['/']);
        } else {
            this.userService.login({'id': null, 'username': this.username});
        }
    }

    @HostListener('window:unload', ['$event'])
    onUnload() {
        this.logout();
    }

    onReceiverChange(event:any) {
        this.receiver = event;
    }

    logout() {
        this.userService.logout({ 'id': null, 'username': this.username })
            .subscribe(
                (res: any) => {
                    this.logoutSocial();
                },
                (error: { _body: any; }) => {
                    console.log(error._body);
                });
    }

    logoutSocial() {
        this.authService.signOut().then(() => {
            this.clearSession();
        },
            (error: any) => {
                this.clearSession();
            });
    }

    clearSession() {
        sessionStorage.removeItem('user');
        this.stompService.deactivate();

        this.router.navigate(['/']);
    }
}
