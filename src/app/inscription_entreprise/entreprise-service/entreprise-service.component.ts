import { Component, OnInit } from '@angular/core';
import {service} from "../../servise";
import {ServiseService} from "../../services/servise.service";
import {NgToastService} from "ng-angular-popup";
import {Router} from "@angular/router";

@Component({
  selector: 'app-entreprise-service',
  templateUrl: './entreprise-service.component.html',
  styleUrls: ['./entreprise-service.component.css']
})
export class EntrepriseServiceComponent implements OnInit {

  newSER = new service();
  id: any;


  constructor(private serviser:ServiseService,private toast:NgToastService,private router:Router) { }

  ngOnInit(): void {
    this.newSER.description
  }
  horaire() {
    this.router.navigate(['horaire'])
  }
  info() {
    this.router.navigate(['entreprise'])
  }
  enregistre() {
    this.serviser.createServicereS(this.newSER).subscribe(prod => {
        this.toast.success({detail:'Bravo...',summary:'Ajouter service avec success ',position:'br',duration:5000})
      this.router.navigate(['login'])
      }
      , error => console.log(error));
  }

  onSubmit() {

    this.id = localStorage.getItem('cle')
    {
      this.serviser.ajouterservice(this.id,this.newSER).subscribe(prod => {
        this.toast.success({detail: 'Bravo..', summary: 'Ajouter votre service avec sucess', position: 'br', duration: 5000})
        this.router.navigate(['login'])
      });
    }

  }
}
