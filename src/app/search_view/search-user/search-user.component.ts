import { Component, OnInit } from '@angular/core';
import {EntrepriseService} from "../../services/entreprise.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Entreprise} from "../../Entreprise";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AvisService} from "../../services/avis.service";
import {avis} from "../../avis";
import {Rendez_vousService} from "../../services/rendez_vous.service";
import {rendez_vous} from "../../rendez_vous";
import {NgToastService} from "ng-angular-popup";

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
 newRDV= new rendez_vous;
  count: any;
  constructor( private avisservice:AvisService,private entrepriseService: EntrepriseService, private activatedRoute: ActivatedRoute, private router: Router,private rendezvouservice:Rendez_vousService,private toast:NgToastService) {
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
    this.avisservice.countAvisEntrepriseId(this.entrepriseId).subscribe((response) => {
      this.count = response
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

  rdv() {
this.rendezvouservice.createRDV(this.entrepriseId,this.newRDV).subscribe(prod => {
  console.log(prod);
  this.toast.success({detail:'Success',summary:'This is Success',position:'br',duration:5000})
  console.log("ajouter avec sucess")
})}

}


