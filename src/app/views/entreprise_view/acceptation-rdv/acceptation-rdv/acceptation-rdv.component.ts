import { Component, OnInit } from '@angular/core';
import {Rendez_vousService} from "../../../../services/rendez_vous.service";
import {ActivatedRoute} from "@angular/router";
import {rendez_vous} from "../../../../rendez_vous";
import {NgToastService} from "ng-angular-popup";
import {FactureService} from "../../../../services/facture.service";

@Component({
  selector: 'app-acceptation-rdv',
  templateUrl: './acceptation-rdv.component.html',
  styleUrls: ['./acceptation-rdv.component.css']
})
export class AcceptationRdvComponent implements OnInit {
 tab!: rendez_vous[];

  constructor(private rdvservice:Rendez_vousService,private router:ActivatedRoute,private toast:NgToastService,private factureservice:FactureService) { }

  ngOnInit(): void {
    this.rdvservice.getAllRdvEntrepriseNo(this.router.snapshot.params["id"]).subscribe((prod)=>{
      this.tab=prod
      }
    )
  }

  accepter(rdv: rendez_vous) {
    let conf = confirm("Etes-vous sûr du accepter rendez vous ?");
    if (conf)
      this.rdvservice.accepterrdv(rdv.id_RDV).subscribe(() => {

        this.toast.success({detail:'Bravo..',summary:'Acceptation rendez vous',position:'br',duration:9000})
        this.factureservice.createfac(rdv.id_RDV).subscribe((prod) => {
          console.log(prod)

        })
      })


  }

  delete(rdv: rendez_vous) {
    let conf = confirm("Etes-vous sûr du n'accepte pas rendez vous ?");
    if (conf)
      this.rdvservice.deleteRDV(rdv.id_RDV).subscribe(() => {

        this.toast.warning({detail:'Bravo..',summary:'Refuse les rendez vous ',position:'br',duration:9000})

      })


  }
}
