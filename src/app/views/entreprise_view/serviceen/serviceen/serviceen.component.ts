import { Component, OnInit } from '@angular/core';
import {ServiseService} from "../../../../services/servise.service";
import {service} from "../../../../servise";
import {ActivatedRoute} from "@angular/router";
import {NgToastService} from "ng-angular-popup";
import {Entreprise} from "../../../../Entreprise";
import {rendez_vous} from "../../../../rendez_vous";

@Component({
  selector: 'app-serviceen',
  templateUrl: './serviceen.component.html',
  styleUrls: ['./serviceen.component.css']
})
export class ServiceenComponent implements OnInit {
  serv!: service[];
  newSER = new service();
  private servic!: service[];
  employee!: service;
  servdes!: service[];

  constructor(private toast: NgToastService, private route: ActivatedRoute, private servicee: ServiseService) {
  }

  ngOnInit(): void {
    this.servicee.listService(this.route.snapshot.params['id']).subscribe(prod => {
        this.serv = prod;
        console.log(this.serv)
      }
    )
    this.servicee.listServicedesactivee(this.route.snapshot.params['id']).subscribe(prod => {
        this.servdes = prod;
        console.log(this.servdes)
      }
    )
  }

  add() {
    this.servicee.ajouterservice(this.route.snapshot.params['id'], this.newSER).subscribe(prod => {
      this.toast.success({
        detail: 'Bravo..',
        summary: 'Ajouter votre service avec sucess',
        position: 'br',
        duration: 5000
      })
      window.location.reload();
    });
  }

  accepter(rdv: service) {
    let conf = confirm("Etes-vous sûr du desactiver ?");
    if (conf)
      this.servicee.desactiver(rdv.id_service).subscribe(() => {

        this.toast.success({detail: 'Bravo..', summary: 'vous avez desactivee service', position: 'br', duration: 9000})
        window.location.reload();
      })
  }

  refuser(item: service) {  let conf = confirm("Etes-vous sûr d'activee ?");
    if (conf)
      this.servicee.Activee(item.id_service).subscribe(() => {

        this.toast.success({detail: 'Bravo..', summary: 'vous avez activee service', position: 'br', duration: 9000})
        window.location.reload();
      })

  }
}
