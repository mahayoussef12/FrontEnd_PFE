import { Component, OnInit } from '@angular/core';
import {EntrepriseService} from "../services/entreprise.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Entreprise} from "../Entreprise";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AvisService} from "../services/avis.service";
import {avis} from "../avis";

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  entreprise!: Entreprise;
  entrepriseId: any;
  aviss: any;
  maha!: avis[];
 newAvis!: avis;
  constructor( private avisservice:AvisService,private entrepriseService: EntrepriseService, private activatedRoute: ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
    this.entrepriseId = this.activatedRoute.snapshot.params["id"];
    console.log(this.entrepriseId)
    this.entrepriseService.getEntrepriseById(this.entrepriseId).subscribe((response) => {
      this.entreprise = response
    })
    this.avisservice.count(this.entrepriseId).subscribe(prod => {
      this.aviss = prod;

    });
    this.avisservice.getEntrepriseId(this.entrepriseId).subscribe((response) => {
      this.maha = response
      console.log(this.maha)
    })
  }
  test() {
    this.avisservice.createAvis(this.entrepriseId,this.newAvis).subscribe(prod => {
      console.log(prod);
      console.log("ajouter avec sucess")
    })}

  gotoavis(id: any) {
    this.router.navigate(['avis/',id])

  }
}

