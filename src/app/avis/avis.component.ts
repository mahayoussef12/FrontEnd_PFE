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
 entrepriseId: any;
  rating: any;
  newAvis = new avis();

  brandForm!:FormGroup;
  isSubmitted = false;

  constructor(private toast:NgToastService, private entrepriseService: EntrepriseService, private activatedRoute: ActivatedRoute, private router: Router,private avisservice:AvisService, private _fb: FormBuilder) {


  }


  ngOnInit(): void {
    this.brandForm = this._fb.group({
      start:['', Validators.required],
      nom_auteur:['', Validators.required],
      prenom_auteur:['', Validators.required],
      email_auteur:['', Validators.required],
      description:['', Validators.required],
    });
    this.entrepriseId = this.activatedRoute.snapshot.params["id"];
    console.log(this.entrepriseId)
    this.entrepriseService.getEntrepriseById(this.entrepriseId).subscribe((response) => {
      this.entreprise = response
    })

  }

  test() {
    this.avisservice.createAvis(this.entrepriseId,this.brandForm.value).subscribe(prod => {
      this.toast.success({detail:'Bravo..',summary:'Ajouter votre avis avec Success',position:'br',duration:5000})
      this.router.navigate(['user-search',this.entrepriseId])
  })}
}
