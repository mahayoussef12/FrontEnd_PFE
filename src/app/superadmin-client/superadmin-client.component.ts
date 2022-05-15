import { Component, OnInit } from '@angular/core';
import {Entreprise} from "../Entreprise";
import {Client} from "../Client";
import {admin} from "../admin";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../services/client.service";
import {AdminService} from "../services/admin.service";
import {EntrepriseService} from "../services/entreprise.service";

@Component({
  selector: 'app-superadmin-client',
  templateUrl: './superadmin-client.component.html',
  styleUrls: ['./superadmin-client.component.css']
})
export class SuperadminClientComponent implements OnInit {
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


  adminEntreprise() {
    this.router.navigate(['super_admin/entreprise'])
  }
}
