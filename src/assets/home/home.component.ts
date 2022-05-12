import { Component, OnInit } from '@angular/core';
import {EntrepriseService} from "../services/entreprise.service";
import {Entreprise} from "../Entreprise";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categorie!: string;
  nom!: string;
  constructor(private entrepriseService:EntrepriseService, private activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

  }

  search() {
    console.log(this.nom)
    console.log(this.categorie)
    localStorage.setItem('monNom', this.nom)
    localStorage.setItem('monCategorie', this.categorie)
    this.router.navigate(['search',this.nom,this.categorie]);

  }


}
