import { Component, OnInit } from '@angular/core';
import {rendez_vous} from "../rendez_vous";
import {Rendez_vousService} from "../services/rendez_vous.service";
import {avis} from "../avis";

@Component({
  selector: 'app-prendre-rdv',
  templateUrl: './prendre-rdv.component.html',
  styleUrls: ['./prendre-rdv.component.css']
})
export class PrendreRdvComponent implements OnInit {
  newrdv = new rendez_vous();

  constructor(private rdvservice:Rendez_vousService) { }

  ngOnInit(): void {
  }

  test() {
    this.rdvservice.createRDV(this.newrdv).subscribe((prod)=>{
      console.log(prod);
      console.log("ajouter")
    })
  }
}
