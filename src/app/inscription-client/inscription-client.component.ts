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


  brandForm!: FormGroup;
  isSubmitted = false;
  userFile: any;
  public imagePath: any;
  imgURL: any;
  public message!: string;

  constructor(private clientService: ClientService, private userservice: UserService, private _fb: FormBuilder, private toast: NgToastService) {

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
      email: ['', [Validators.required, Validators.email, InscriptionClientComponent.emailMatchValidator]],
      mdp: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],


    });
  }

  get _fc() {
    return this.brandForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.brandForm.valid) {
      const formData = new FormData();
      const client = this.brandForm.value;
      formData.append('client', JSON.stringify(client));
      formData.append('file', this.userFile);
      this.clientService.create(formData).subscribe(data => {
        this.toast.success({detail: "Success Message", summary: "update avec success", duration: 5000})

      });

      /*   this.clientService.create(this.brandForm.value).subscribe(prod => {
           console.log(prod);
         this.toast.success({detail:"Success Message",summary:"update avec success",duration:5000})
         })*/
    }
    if (this.brandForm.invalid) {
      this.toast.success({detail: "Success Message", summary: "update avec success", duration: 5000})
    }
  }

  private static emailMatchValidator(control: AbstractControl) {
    if (control.value !== 'emailaddress@gmail.com') {
      return false;
    } else {
      return {emailExists: true};
    }
  }

  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
      // this.f['profile'].setValue(file);

      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }

      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
    }
  }
}
