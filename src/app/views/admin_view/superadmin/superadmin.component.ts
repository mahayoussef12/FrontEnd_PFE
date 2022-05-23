import { Component, OnInit } from '@angular/core';
import {Client} from "../../../Client";
import {Entreprise} from "../../../Entreprise";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../../../services/client.service";
import {AdminService} from "../../../services/admin.service";
import {EntrepriseService} from "../../../services/entreprise.service";

class admin {
}

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})
export class SuperadminComponent implements OnInit {

  entreprises: Entreprise[] | undefined
  entreprise: any;
  client:Client | undefined;
  entrepriseId:any;
  admins!: admin[];



  clients:Client[] | undefined;


  constructor(private route: ActivatedRoute,private clientservise:ClientService,private adminService:AdminService,private entrepriseService:EntrepriseService, private router: Router) { }

  ngOnInit(): void {
    this.adminService.getall().subscribe(prod => {
      this.admins = prod;
      console.log(this.admins)  }
    )
    this.entrepriseService.getAllEntreprise().subscribe(prod => {
      this.entreprises = prod;})
    console.log(this.entreprises)
    this.clientservise.getAllCliens().subscribe(prod => {
      this.clients = prod;
      console.log(this.clients)  }
    )
  }
}
