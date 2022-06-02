import { Component, OnInit } from '@angular/core';
import {Entreprise} from "../../Entreprise";
import {EntrepriseService} from "../../services/entreprise.service";
import {Router} from "@angular/router";
import {NgToastService} from "ng-angular-popup";
import {UserService} from "../../services/user.service";
import {User} from "../../User";

@Component({
  selector: 'app-incri-entreprise',
  templateUrl: './incri-entreprise.component.html',
  styleUrls: ['./incri-entreprise.component.css']
})
export class IncriEntrepriseComponent implements OnInit {
  newEN = new Entreprise();
Newuser=new User();
  private entreprise!: Entreprise;
  constructor(private entrepriseService: EntrepriseService, private router :Router,private toast:NgToastService,private userservice:UserService) { }


  ngOnInit(): void {
  }

  enregistre() {
    this.entrepriseService.createEntreprise(this.newEN).subscribe(prod => {
      this.entreprise=prod
      this.userservice.create(this.entreprise.id,this.Newuser).subscribe(prod => {
        this.toast.success({detail:'Bravo...',summary:'Ajouter entreprise avec success ',position:'br',duration:5000})
        this.router.navigate(['code',this.entreprise.id])
      })
    }
      , error => console.log(error));
  }


}
