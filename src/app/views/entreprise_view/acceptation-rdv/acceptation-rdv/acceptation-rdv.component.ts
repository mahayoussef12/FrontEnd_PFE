import { Component, OnInit } from '@angular/core';
import {Rendez_vousService} from "../../../../services/rendez_vous.service";
import {ActivatedRoute} from "@angular/router";
import {rendez_vous} from "../../../../rendez_vous";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-acceptation-rdv',
  templateUrl: './acceptation-rdv.component.html',
  styleUrls: ['./acceptation-rdv.component.css']
})
export class AcceptationRdvComponent implements OnInit {
 tab!: rendez_vous[];

  constructor(private rdvservice:Rendez_vousService,private router:ActivatedRoute,private toast:NgToastService) { }

  ngOnInit(): void {
    this.rdvservice.getAllRdvEntrepriseNo(this.router.snapshot.params["id"]).subscribe((prod)=>{
      this.tab=prod
      }
    )
  }

  accepter(rdv: rendez_vous) {
    let conf = confirm("Etes-vous sûr du desactiver le commentaire ?");
    if (conf)
      this.rdvservice.accepterrdv(rdv.id_RDV).subscribe(() => {

        this.toast.success({detail:'Bravo..',summary:'desactiver commentaire avec success',position:'br',duration:9000})

      })


  }
}
