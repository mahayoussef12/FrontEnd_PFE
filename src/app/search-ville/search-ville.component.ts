import { Component, OnInit } from '@angular/core';
import {Entreprise} from "../Entreprise";
import {EntrepriseService} from "../services/entreprise.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search-ville',
  templateUrl: './search-ville.component.html',
  styleUrls: ['./search-ville.component.css']
})
export class SearchVilleComponent implements OnInit {
  entreprise!: Entreprise[];

  constructor(private entrepriseService:EntrepriseService, private activatedRoute: ActivatedRoute,private router:Router) {
  }
  ngOnInit(): void {
    this.entrepriseService.Getville(this.activatedRoute.snapshot.params["ville"]).subscribe(prod => {
      this.entreprise = prod;
      console.log(prod)
    });
  }

}
