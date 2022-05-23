import { Component, OnInit } from '@angular/core';
import {HoraireService} from "../../services/horaire.service";
import {horaire} from "../../horaire";
import {NgToastService} from "ng-angular-popup";
import {Router} from "@angular/router";

@Component({
  selector: 'app-horaire-entreprise',
  templateUrl: './horaire-entreprise.component.html',
  styleUrls: ['./horaire-entreprise.component.css']
})
export class HoraireEntrepriseComponent implements OnInit {
  newHoraire = new horaire()
  id: any;

  constructor(private horaireservice: HoraireService,private toast:NgToastService,private router:Router) {
  }

  ngOnInit(): void {
  }

  horaire() {
this.router.navigate(['entreprise'])
  }

  enregistre() {
    this.id = localStorage.getItem('cle')

    this.horaireservice.ajouterhoraire(this.id, this.newHoraire).subscribe(prod => {
      this.toast.success({detail: 'Success', summary: 'This is Success', position: 'br', duration: 5000})
    });
  }
}
