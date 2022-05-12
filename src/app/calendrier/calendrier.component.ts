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
  entreprise!: Client;


  constructor(private route: ActivatedRoute,private entrepriseService:ClientService, private router: Router) { }


  ngOnInit(): void {
    this.entrepriseId = this.route.snapshot.params["id"];
    console.log(this.entrepriseId)
    this.entrepriseService.getClientById(this.entrepriseId).subscribe((response) => {
      this.entreprise = response
    })
  }

}
