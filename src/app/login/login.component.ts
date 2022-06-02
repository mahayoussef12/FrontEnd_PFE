import { Component, OnInit } from '@angular/core';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService} from "angularx-social-login";
import * as bcrypt from 'bcryptjs';
import {ClientService} from "../services/client.service";
import {User} from "../User";
import {Client} from "../Client";
import {Entreprise} from "../Entreprise";
import {EntrepriseService} from "../services/entreprise.service";
import {UserService} from "../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser = new User();
  clients!: Client;
  private entreprise!: Entreprise[];
  private tab!: User;
  private id!: any;
  email: any;
  mdp: any;
  private en!: Client;
  private entre!: Entreprise;

  constructor(private socialAuthService: SocialAuthService,private registerService: ClientService, private entrepriseService: EntrepriseService, private userservice: UserService, private activatedRoute: ActivatedRoute,private router:Router) {
  }

  ngOnInit(): void {


  }



  register() {
    this.registerService.testing(this.email).subscribe(prod => {
      this.tab = prod;
      if (this.tab.role == "entreprise") {
        this.registerService.en(this.email).subscribe(prod => {
          this.id = prod
          console.log(prod)
          this.entrepriseService.getEntrepriseById(this.id).subscribe(prod => {
            this.entre = prod
            if (bcrypt.compareSync(this.mdp, <string>this.entre.mdp)) {
              this.router.navigate(['/entreprise/', this.id, 'dashbord', this.id])
              localStorage.setItem("entreprise", JSON.stringify(this.id));
            }

          })
        })

      }

      if (this.tab.role == "client") {
        this.registerService.test(this.email).subscribe(prod => {
          this.id = prod

            this.registerService.getClientById(this.id).subscribe(prod => {
              this.en = prod
            if (bcrypt.compareSync(this.mdp, <string>this.en.mdp)) {

              this.router.navigate(['/client/', this.id, 'dashbord', this.id])
              localStorage.setItem("client", JSON.stringify(this.id));
            }
          })
        })
      }
    })
  }



   /* this.registerService.getAllEmail(this.newUser.email).subscribe(async prod => {
      this.clients = prod;
      console.log(prod)
      console.log(bcrypt.compareSync("123",<string>this.clients.mdp))
      if ((this.clients.email == this.newUser.email) && (bcrypt.compareSync(<string>this.newUser.mdp, <string>this.clients.mdp))) {
        this.userservice.createClient(this.newUser).subscribe(dataa => {
          console.log(dataa);
          this.router.navigate(['compte/',this.clients.id])
          console.log("ajouter avec success")
        })
      } else {
        console.log("refuse client")
      }
    })
    this.entrepriseService.getAllEmail(this.newUser.email).subscribe(prod=>{
      this.entreprise=prod;
    })*/



  loginWithGoogle() :void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
  }
  loginWithFacebook():void{
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID)
  }

  choisir() {
this.router.navigate(['client'])
  }
}
