import { Component, OnInit } from '@angular/core';
import {Entreprise} from "../../Entreprise";
import {EntrepriseService} from "../../services/entreprise.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search-categorie',
  templateUrl: './search-categorie.component.html',
  styleUrls: ['./search-categorie.component.css']
})
export class SearchCategorieComponent implements OnInit {

  entreprise!: Entreprise[];

  constructor(private entrepriseService:EntrepriseService, private activatedRoute: ActivatedRoute,private router:Router) {
  }
  ngOnInit(): void {
    this.entrepriseService.Getcategorie(this.activatedRoute.snapshot.params["categorie"]).subscribe(prod => {
      this.entreprise = prod;
      console.log(prod)
    });
  }

}
