import { Component, OnInit } from '@angular/core';
import {Client} from "../Client";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../services/client.service";
import {FactureService} from "../services/facture.service";
import {Facture} from "../Facture";

@Component({
  selector: 'app-compte-en-client',
  templateUrl: './compte-en-client.component.html',
  styleUrls: ['./compte-en-client.component.css']
})
export class CompteEnClientComponent implements OnInit {

  detailId: any;
 client!: Client
 tab_fac!: Facture[];

  constructor(private route: ActivatedRoute, private clientservice: ClientService, private router: Router,private factureservice:FactureService) {
  }


  ngOnInit(): void {

    this.detailId = this.route.snapshot.params["id"];
    console.log(this.detailId)
    this.clientservice.getClientById(this.detailId).subscribe((response) => {
      this.client = response
    }, (error) => {
      console.log(error);
    })
this.factureservice.getFacByclient(this.detailId).subscribe((response) => {
  this.tab_fac = response
}, (error) => {
  console.log(error);
})
  }

  consulter(rdvv: Facture) {
    this.router.navigate(['facture/',rdvv.id_facture])
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
}
