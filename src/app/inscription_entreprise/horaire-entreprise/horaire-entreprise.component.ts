import { Component, OnInit } from '@angular/core';
import {HoraireService} from "../../services/horaire.service";
import {horaire} from "../../horaire";
import {NgToastService} from "ng-angular-popup";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-horaire-entreprise',
  templateUrl: './horaire-entreprise.component.html',
  styleUrls: ['./horaire-entreprise.component.css']
})
export class HoraireEntrepriseComponent implements OnInit {

  id: any;
  brandForm!:FormGroup;
  isSubmitted = false;

  constructor(private horaireservice: HoraireService,private toast:NgToastService,private router:Router,private _fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.brandForm = this._fb.group({
      day : ['', Validators.requiredTrue],
      opentime:['', Validators.required],
      closeTime:['', Validators.required],
      opentimemidi:['', Validators.required],
      closetimemidi:['', Validators.required],
    });
  }
  get _fc() { return this.brandForm.controls; }
  horaire() {
this.router.navigate(['service'])
  }

  enregistre() {

  }

  onSubmit() {
    this.isSubmitted = true;
    this.id = localStorage.getItem('cle')
    if (this.brandForm.valid) {
      this.horaireservice.ajouterhoraire(this.id,this.brandForm.value).subscribe(prod => {
        this.toast.success({detail: 'Bravo..', summary: 'Ajouter votre Horaire avec sucess', position: 'br', duration: 5000})
      });
    }
    if (this.brandForm.invalid){
      this.toast.success({detail:"Success Message",summary:"update avec success",duration:5000})
    }
  }
}
