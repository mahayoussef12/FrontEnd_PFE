import { Component, OnInit } from '@angular/core';
import {Entreprise} from "../Entreprise";
import {ActivatedRoute} from "@angular/router";
import {EntrepriseService} from "../services/entreprise.service";
import {Client} from "../Client";
import {ClientService} from "../services/client.service";

@Component({
  selector: 'app-edit-profile-client',
  templateUrl: './edit-profile-client.component.html',
  styleUrls: ['./edit-profile-client.component.css']
})
export class EditProfileClientComponent implements OnInit {

  employee!: Client;
  id: any;

  constructor(private route: ActivatedRoute,private clientService:ClientService) { }

  ngOnInit(): void {
    this.employee = new Client();

    this.id = this.route.snapshot.params['id'];

    this.clientService.getClientById(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }
  updateEmployee() {
    this.clientService.updateClient(this.id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.employee = new Entreprise();
        console.log("update avec success")
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateEmployee();
  }

}
