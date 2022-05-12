import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {EntrepriseService} from "../services/entreprise.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categorie!: string;
  nom!: string;

  test: any;
  Restaurent: any;

 testing: any;
  beauty: any;
  medecin: any;
 souss: any;
   mestir: any;




  constructor( private activatedRoute: ActivatedRoute,private router:Router,private entrepriseService:EntrepriseService) { }

  ngOnInit(): void {
    this.entrepriseService.CountGategorie("fieance").subscribe((response) => {
      this.test=response

    })
    this.entrepriseService.CountGategorie("restaurent").subscribe((data) => {
      this.testing=data
    })
    this.entrepriseService.CountGategorie("beauty").subscribe((data) => {

      this.beauty=data
    })
    this.entrepriseService.CountGategorie("medecin").subscribe((data) => {
      this.medecin=data


    })
    this.entrepriseService.Countville("sousse").subscribe((data) => {
      this.souss=data


    })
    this.entrepriseService.Countville("monastir").subscribe((data) => {
      this.mestir=data

    })
  }



  search() {
    console.log(this.nom)
    console.log(this.categorie)
    localStorage.setItem('monNom', this.nom)
    localStorage.setItem('monCategorie', this.categorie)
    this.router.navigate(['search',this.nom,this.categorie]);

  }




  cv() {
    this.router.navigate(['search_categorie',"fieance"]);
  }

  restau() {
    this.router.navigate(['search_categorie',"restaurent"]);
  }

  beau() {
    this.router.navigate(['search_categorie',"beauty"]);
  }

  docteur() {
    this.router.navigate(['search_categorie',"medecin"]);
  }

  sousse() {
    this.router.navigate(['search_ville',"sousse"]);
  }

  monastir() {
    this.router.navigate(['search_ville',"monastir"]);
  }
}
