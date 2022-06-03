import { Component, OnInit } from '@angular/core';
import {rendez_vous} from "../rendez_vous";
import {Rendez_vousService} from "../services/rendez_vous.service";
import {avis} from "../avis";
import {IAngularMyDpOptions, IMyDateModel} from "angular-mydatepicker";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-prendre-rdv',
  templateUrl: './prendre-rdv.component.html',
  styleUrls: ['./prendre-rdv.component.css']
})
export class PrendreRdvComponent implements OnInit {
  title = 'newMat';

  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      amount: ['', Validators.required],
      stock: ['', Validators.required]
    });
  }

  submit(){
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);
  }



}
