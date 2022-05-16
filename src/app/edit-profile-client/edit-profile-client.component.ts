import { Component, OnInit } from '@angular/core';
import {Entreprise} from "../Entreprise";
import {ActivatedRoute, Router} from "@angular/router";
import {EntrepriseService} from "../services/entreprise.service";
import {Client} from "../Client";
import {ClientService} from "../services/client.service";
import {NgToastService} from "ng-angular-popup";

import bcrypt from "bcrypt";

@Component({
  selector: 'app-edit-profile-client',
  templateUrl: './edit-profile-client.component.html',
  styleUrls: ['./edit-profile-client.component.css']
})
export class EditProfileClientComponent implements OnInit {

  employee!: Client;
  id: any;
 client!: Client;

  constructor(private route: ActivatedRoute,private clientService:ClientService,private router:Router,private toast:NgToastService) { }

  ngOnInit(): void {
    this.employee = new Client();

    this.id = this.route.snapshot.params['id'];

    this.clientService.getClientById(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
    this.clientService.getClientById(this.id) .subscribe(data => {
      console.log(data)
      this.client=data
    })
  }
  updateEmployee() {
    this.clientService.updateClient(this.id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.employee = new Entreprise();
        console.log("update avec success")
        this.toast.success({detail:"Success Message",summary:"update avec success",duration:5000})
        this.router.navigate(['profile/',this.id])
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateEmployee();
  }
  profile(id: any) {
    this.router.navigate(['profile/',id])
  }

  accuiel(id: any) {

    this.router.navigate(['compte/',id])
  }

  facture(id: any) {
    this.router.navigate(['All_facture_Client/',id])
  }

  rendez_vous(id: any) {

    this.router.navigate(['calendrier/',id])

  }
  edit(id: any) {
    this.router.navigate(['edit_client/',id])
  }

  saltRounds = 10;
   myPlaintextPassword = 's0/\/\P4$$w0rD';
   someOtherPlaintextPassword = 'not_bacon';

}
