import { Component, OnInit } from '@angular/core';
import {Client} from "../../../Client";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../../../services/client.service";
import {NgToastService} from "ng-angular-popup";
import {Entreprise} from "../../../Entreprise";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  employee!: Client;
  id: any;
  client!: Client;

  constructor(private route: ActivatedRoute,private clientService:ClientService,private router:Router,private toast:NgToastService) { }

  ngOnInit(): void {
    this.employee = new Client();
    this.clientService.getClientById(this.route.snapshot.params['id'])
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
    this.clientService.getClientById(this.route.snapshot.params['id']) .subscribe(data => {
      console.log(data)
      this.client=data
    })
  }
  updateEmployee() {
    this.clientService.updateClient(this.route.snapshot.params['id'], this.employee)
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
}
