import { Component, OnInit } from '@angular/core';
import {Entreprise} from "../Entreprise";
import {ActivatedRoute, Router} from "@angular/router";
import {EntrepriseService} from "../services/entreprise.service";
import {FactureService} from "../services/facture.service";
import { Facture } from '../Facture';

@Component({
  selector: 'app-compte-en-facture',
  templateUrl: './compte-en-facture.component.html',
  styleUrls: ['./compte-en-facture.component.css']
})
export class CompteEnFactureComponent implements OnInit {


  entrepriseId: any;
  entreprise!: Entreprise;

 Facture!: Facture[];

  constructor(private route: ActivatedRoute, private entrepriseService: EntrepriseService, private router: Router,private factureService:FactureService) {
  }
  ngOnInit(): void {
    this.entrepriseId = this.route.snapshot.params["id"];
    console.log(this.entrepriseId)
    this.entrepriseService.getEntrepriseById(this.entrepriseId).subscribe((response) => {
      this.entreprise = response;
    })
    this.factureService.getFacByNum(this.route.snapshot.params["id"]).subscribe(prod => {
      console.log(prod)
      this.Facture=prod
    })
  }
  consulter(rdvv: Facture) {
    this.router.navigate(['facture/',rdvv.id_facture])
  }
}
