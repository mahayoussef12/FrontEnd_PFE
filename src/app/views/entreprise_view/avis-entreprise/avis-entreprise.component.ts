import { Component, OnInit } from '@angular/core';
import {Entreprise} from "../../../Entreprise";
import {ActivatedRoute, Router} from "@angular/router";
import {EntrepriseService} from "../../../services/entreprise.service";
import {NgToastService} from "ng-angular-popup";
import {AvisService} from "../../../services/avis.service";
import {avis} from "../../../avis";

@Component({
  selector: 'app-avis-entreprise',
  templateUrl: './avis-entreprise.component.html',
  styleUrls: ['./avis-entreprise.component.css']
})
export class AvisEntrepriseComponent implements OnInit {


  entrepriseId: any;
  entreprise!: Entreprise;
 maha!: avis[];

  constructor(private route: ActivatedRoute,private entrepriseService:EntrepriseService, private router: Router,private toast:NgToastService,private avisservice:AvisService) { }

  ngOnInit(): void {
    this.entrepriseId = this.route.snapshot.params["id"];
    console.log(this.entrepriseId)
    this.entrepriseService. getEntrepriseById(this.entrepriseId).subscribe((response)=>{
      this.entreprise = response
      /* localStorage.setItem('monObjet', JSON.stringify(this.entreprise.id))*/
    },(error) => {
      console.log(error)
    })
    this.avisservice.getEntrepriseId(this.entrepriseId).subscribe((response) => {
      this.maha = response
      console.log(this.maha)
    })
  }


  delete(avis: avis) {
    let conf = confirm("Etes-vous sûr du desactiver le commentaire ?");
    if (conf)
      this.avisservice.update(avis.id_avis).subscribe(() => {
        console.log("supprimé");
        this.toast.success({detail:'Bravo..',summary:'desactiver commentaire avec success',position:'br',duration:5000})

      })

  }
  rdv(id: any) {

    this.router.navigate(['rddv/',id])
  }
  avis(id: any) {
    this.router.navigate(['avis_en/',id])

  }
}
