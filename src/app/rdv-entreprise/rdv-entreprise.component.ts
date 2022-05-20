import { Component, OnInit } from '@angular/core';
import {EntrepriseService} from "../services/entreprise.service";
import {ActivatedRoute, Router} from "@angular/router";
import {rendez_vous} from "../rendez_vous";
import {Entreprise} from "../Entreprise";
import {Rendez_vousService} from "../services/rendez_vous.service";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-rdv-entreprise',
  templateUrl: './rdv-entreprise.component.html',
  styleUrls: ['./rdv-entreprise.component.css']
})
export class RdvEntrepriseComponent implements OnInit {
  rdv!: rendez_vous[];
  entrepriseId: any;
  entreprise!: Entreprise;

  constructor(private entrepriseService: EntrepriseService, private route: ActivatedRoute, private router: Router,private rendevous:Rendez_vousService,private toast:NgToastService) {
  }

  ngOnInit(): void {
    this.entrepriseService.getAllRdvEntreprise(this.route.snapshot.params["id"]).subscribe(prod => {
      this.rdv = prod;
      console.log(prod)

    });
    this.entrepriseId = this.route.snapshot.params["id"];
    console.log(this.entrepriseId)
    this.entrepriseService.getEntrepriseById(this.entrepriseId).subscribe((response) => {
      this.entreprise = response;
    })
  }

  facture(id: any) {
    this.router.navigate(['ds/', id])
  }

  rendez_vous(id: any) {

    this.router.navigate(['calendrier/en/', id])
  }

  profile(id: any) {
    this.router.navigate(['profile_entreprise/', id])

  }


  accuiel(id: any) {

    this.router.navigate(['compte_entreprise/', id])
  }

  edit(id: any) {

    this.router.navigate(['edit/', id])
  }

  delete(rdvv: rendez_vous) {
    let conf = confirm("Etes-vous sûr du supprimer ?");
    if (conf)
      this.rendevous.deleteRDV(rdvv.id_RDV).subscribe(() => {
        console.log("supprimé");
        this.router.navigate(['rddv/', this.entrepriseId])
        window.location.reload();
        this.toast.success({detail:'Success',summary:'This is Success',position:'br',duration:5000})

      })
  }

  modifier(rdvv: rendez_vous) {

  }

  test(id: any) {

      this.router.navigate(['rddv/',id])
    }
  avis(id: any) {
    this.router.navigate(['avis_en/',id])

  }

}
