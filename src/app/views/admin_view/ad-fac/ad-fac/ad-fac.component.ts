import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FactureService} from "../../../../services/facture.service";
import {Facture} from "../../../../Facture";
import {FilterSearchService} from "ng-filter-search";

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

  p: number=1;
 factures!: Facture[];
  filterTerm!: string;
  constructor(private route: ActivatedRoute,private factureService:FactureService, private router: Router,private fs: FilterSearchService) { }

  ngOnInit(): void {
    this.factureService.getAllFacture().subscribe(prod => {
        this.factures = prod;
        console.log(this.factures)
      }
    )
  }




}
