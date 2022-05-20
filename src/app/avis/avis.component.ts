import { Component, OnInit } from '@angular/core';
import {Entreprise} from "../Entreprise";
import {EntrepriseService} from "../services/entreprise.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {avis} from "../avis";
import {AvisService} from "../services/avis.service";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
  entreprise!: Entreprise;
  private entrepriseId: any;
  rating: any;
  newAvis = new avis();



  constructor(private toast:NgToastService, private entrepriseService: EntrepriseService, private activatedRoute: ActivatedRoute, private router: Router,private avisservice:AvisService) {


  }


  ngOnInit(): void {
    this.entrepriseId = this.activatedRoute.snapshot.params["id"];
    console.log(this.entrepriseId)
    this.entrepriseService.getEntrepriseById(this.entrepriseId).subscribe((response) => {
      this.entreprise = response
    })

  }

  test() {
    this.avisservice.createAvis(this.entrepriseId,this.newAvis).subscribe(prod => {
      this.toast.success({detail:'Success',summary:'This is Success',position:'br',duration:5000})
      this.router.navigate(['user-search',this.entrepriseId])
  })}
}
