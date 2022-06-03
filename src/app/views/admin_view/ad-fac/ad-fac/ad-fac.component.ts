import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FactureService} from "../../../../services/facture.service";
import {Facture} from "../../../../Facture";

@Component({
  selector: 'app-ad-fac',
  templateUrl: './ad-fac.component.html',
  styleUrls: ['./ad-fac.component.css'],
  styles: [
    `
      .greenClass { background-color: green }
      .redClass { background-color: red }
    `
  ]
})
export class AdFacComponent implements OnInit {
factures!: Facture[];

  constructor(private route: ActivatedRoute,private factureService:FactureService, private router: Router) { }

  ngOnInit(): void {
    this.factureService.getAllFacture().subscribe(prod => {
        this.factures = prod;
        console.log(this.factures)
      }
    )
  }



}
