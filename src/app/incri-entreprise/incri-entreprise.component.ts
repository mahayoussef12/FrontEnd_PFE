import { Component, OnInit } from '@angular/core';
import {Entreprise} from "../Entreprise";
import {EntrepriseService} from "../services/entreprise.service";
import {Router} from "@angular/router";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-incri-entreprise',
  templateUrl: './incri-entreprise.component.html',
  styleUrls: ['./incri-entreprise.component.css']
})
export class IncriEntrepriseComponent implements OnInit {
  newEN = new Entreprise();

  private entreprise!: Entreprise;
  constructor(private entrepriseService: EntrepriseService, private router :Router,private toast:NgToastService) { }


  ngOnInit(): void {
  }

  enregistre() {
    this.entrepriseService.createEntreprise(this.newEN).subscribe(prod => {
        this.toast.success({detail:'Success',summary:'This is Success',position:'br',duration:5000})
      this.router.navigate(['horaire'])
        localStorage.setItem('cle', JSON.stringify(prod.id));
    }
      , error => console.log(error));
  }

  horaire() {
    this.router.navigate(['horaire'])
  }

}
