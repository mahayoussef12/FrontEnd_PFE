import { Component, OnInit } from '@angular/core';
import {ClientService} from "../services/client.service";
import {UserService} from "../services/user.service";
import {Client} from "../Client";

import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-inscription-client',
  templateUrl: './inscription-client.component.html',
  styleUrls: ['./inscription-client.component.css']
})
export class InscriptionClientComponent implements OnInit {

  newClient = new Client;
  brandForm!:FormGroup;
  isSubmitted = false;


  constructor(private clientService: ClientService, private userservice: UserService,  private _fb: FormBuilder,private toast:NgToastService) {

  }

  ngOnInit(): void {
    this.brandForm = this._fb.group({
      nom: ['',
        [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      prenom: ['', Validators.required],
      tel: ['', Validators.required],
      adress: ['', Validators.required],
      genre: ['', Validators.required],
      pays: ['', Validators.required],
      ville: ['', Validators.required],
      email: ['',  [Validators.required, Validators.email, InscriptionClientComponent.emailMatchValidator]],
      mdp: ['', [Validators.required, Validators.minLength(4),  Validators.maxLength(10)]],
      images: ['', Validators.required],

    });
  }
  get _fc() { return this.brandForm.controls; }

  onSubmit() {
    this.isSubmitted = true;
    if (this.brandForm.valid) {  this.clientService.create(this.brandForm.value).subscribe(prod => {
        console.log(prod);
      this.toast.success({detail:"Success Message",summary:"update avec success",duration:5000})
      })
    }
    if (this.brandForm.invalid){
      this.toast.success({detail:"Success Message",summary:"update avec success",duration:5000})
    }
  }

  private static emailMatchValidator(control: AbstractControl) {
    if (control.value !== 'emailaddress@gmail.com') {
      return false;
    } else {
      return { emailExists: true };
    }
  }
}
