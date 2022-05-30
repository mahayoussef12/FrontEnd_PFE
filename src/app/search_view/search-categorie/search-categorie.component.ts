import { Component, OnInit } from '@angular/core';
import {Entreprise} from "../../Entreprise";
import {EntrepriseService} from "../../services/entreprise.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AvisService} from "../../services/avis.service";
import {avis} from "../../avis";

@Component({
  selector: 'app-search-categorie',
  templateUrl: './search-categorie.component.html',
  styleUrls: ['./search-categorie.component.css']
})
export class SearchCategorieComponent implements OnInit {

  entreprise!: Entreprise[];
 aviss!: avis;
  p: number=1;

  constructor(private avisservice:AvisService,private entrepriseService:EntrepriseService, private activatedRoute: ActivatedRoute,private router:Router) {
  }
  ngOnInit(): void {
    this.entrepriseService.Getcategorie(this.activatedRoute.snapshot.params["categorie"]).subscribe(prod => {
      this.entreprise = prod;
      console.log(prod)
      for (var val of this.entreprise)
        this.avisservice.count(val.id).subscribe(prod => {
            this.aviss = prod;

          }
        )
    });
  }
  next(id: any) {
    this.router.navigate (['user-search/',id])
  }
}
