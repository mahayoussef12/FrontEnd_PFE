import { Component, OnInit } from '@angular/core';
import {Entreprise} from "../Entreprise";
import {ActivatedRoute, Router} from "@angular/router";
import {EntrepriseService} from "../services/entreprise.service";
import {ClientService} from "../services/client.service";
import {Client} from "../Client";

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit {

  entrepriseId: any;
  client!: Client;


  constructor(private route: ActivatedRoute,private entrepriseService:ClientService, private router: Router) { }


  ngOnInit(): void {
    this.entrepriseId = this.route.snapshot.params["id"];
    console.log(this.entrepriseId)
    this.entrepriseService.getClientById(this.entrepriseId).subscribe((response) => {
      this.client = response
    })
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
