import { Component, OnInit } from '@angular/core';
import {ClientService} from "../services/client.service";
import {Client} from "../Client";
import {UserService} from "../services/user.service";
import {User} from "../User";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-insrip-client',
  templateUrl: './insrip-client.component.html',
  styleUrls: ['./insrip-client.component.css']
})
export class InsripClientComponent implements OnInit {
  newClient = new Client;
  newUser = new User;
  private user!: User;

  constructor(private clientService: ClientService, private userservice: UserService,private toast:NgToastService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {

      this.clientService.create(this.newClient).subscribe(prod => {
        console.log(prod);
        this.toast.success({detail:'Success',summary:'This is Success',position:'br',duration:5000})
      })


  }

}
