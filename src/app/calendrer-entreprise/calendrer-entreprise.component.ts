import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EntrepriseService} from "../services/entreprise.service";
import {Entreprise} from "../Entreprise";

@Component({
  selector: 'app-calendrer-entreprise',
  templateUrl: './calendrer-entreprise.component.html',
  styleUrls: ['./calendrer-entreprise.component.css']
})
export class CalendrerEntrepriseComponent implements OnInit {
 entrepriseId: any;
 entreprise!: Entreprise;

  constructor(private route: ActivatedRoute,private entrepriseService:EntrepriseService, private router: Router) { }


  ngOnInit(): void {
    this.entrepriseId = this.route.snapshot.params["id"];
    console.log(this.entrepriseId)
    this.entrepriseService.getEntrepriseById(this.entrepriseId).subscribe((response) => {
      this.entreprise = response
    })
  }
  facture(id: any) {
    this.router.navigate(['ds/',id])
  }

  rendez_vous(id: any) {

    this.router.navigate(['calendrier/en/',id])
  }
  profile(id: any) {
    this.router.navigate(['profile_entreprise/',id])

  }


  accuiel(id: any) {

    this.router.navigate(['compte_entreprise/',id])
  }


  edit(id: any) {

    this.router.navigate(['edit/',id])
  }

  rdv(id: any) {

    this.router.navigate(['rddv/',id])
  }

  avis(id: any) {
    this.router.navigate(['avis_en/',id])

  }
}
