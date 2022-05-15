import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../services/admin.service";
import {EntrepriseService} from "../services/entreprise.service";
import {ClientService} from "../services/client.service";
import {Entreprise} from "../Entreprise";
import {Client} from "../Client";
import {admin} from "../admin";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  entreprises: Entreprise[] | undefined
  entreprise: any;
  entrepriseId:any;
  clients: Client[] | undefined;
  admins: admin[] | undefined;



  constructor(private route: ActivatedRoute,private adminService:AdminService,private clientservise:ClientService,private entrepriseService:EntrepriseService, private router: Router) { }

  ngOnInit(): void {
    this.entrepriseService.getAllEntreprise().subscribe(prod => {
      this.entreprises = prod;})
    console.log(this.entreprises)

    this.adminService.getall().subscribe(prod => {
      this.admins = prod;
      console.log(this.admins)  }
    )
    this.clientservise.getAllCliens().subscribe(prod => {
      this.clients = prod;
      console.log(this.clients)  }
    )
    this.clientservise.getAllCliens().subscribe(prod => {
      this.clients = prod;
      console.log(this.clients)  }
    )

  }

  next(id:any) {


    this.router.navigate(['compte_entreprise/',id])
  }
  profile(){
    this.router.navigate(['admin'])
  }

  adminClient()
  {
    this.router.navigate(['super_admin/client'])
  }
  adminEntreprise()
  {
    this.router.navigate(['super_admin/entreprise'])
  }


}
