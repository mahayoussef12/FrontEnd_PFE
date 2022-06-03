import { Component, OnInit } from '@angular/core';
import {EntrepriseService} from "../services/entreprise.service";
import {NgToastService} from "ng-angular-popup";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../services/client.service";

@Component({
  selector: 'app-codeconclient',
  templateUrl: './codeconclient.component.html',
  styleUrls: ['./codeconclient.component.css']
})
export class CodeconclientComponent implements OnInit {
  private id: any;
  code: any;

  constructor(private clientservice:ClientService, private toast: NgToastService, private router: ActivatedRoute, private route: Router) {
  }

  ngOnInit(): void {
  }

  save() {
    this.id = this.router.snapshot.params['id'];
    this.clientservice.veriff(this.id, this.code).subscribe((response) => {
      console.log(response)
      if (response == true) {
        console.log("code verifier ")
        this.toast.success({
          detail: 'Bravo..',
          summary: 'Le code de confirmation est équitable',
          position: 'br',
          duration: 10000
        })
        this.route.navigate(['login'])
      } else {
        console.log("code non verifier")
        this.toast.error({
          detail: 'Erreur...',
          summary: 'Code de confirmation est faux',
          position: 'br',
          duration: 9000
        })
      }
    });
  }

  renvoi() {
    this.id = this.router.snapshot.params['id'];
    this.clientservice.renvoiCode(this.id).subscribe((response) => {
      this.toast.success({detail: 'Bravo..', summary: ' vous recevez un autre code', position: 'br', duration: 7000})
    });
  }
}
