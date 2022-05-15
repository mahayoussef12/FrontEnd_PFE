import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-choisir-type-compte',
  templateUrl: './choisir-type-compte.component.html',
  styleUrls: ['./choisir-type-compte.component.css']
})
export class ChoisirTypeCompteComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  client() {
    this.router.navigate(["inscription_client"])
  }
}
