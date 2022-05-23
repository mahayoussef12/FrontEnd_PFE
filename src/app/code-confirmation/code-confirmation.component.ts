import { Component, OnInit } from '@angular/core';
import {EntrepriseService} from "../services/entreprise.service";
import {NgToastService} from "ng-angular-popup";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-code-confirmation',
  templateUrl: './code-confirmation.component.html',
  styleUrls: ['./code-confirmation.component.css']
})
export class CodeConfirmationComponent implements OnInit {
  id!: string | null;
  code: any;

  constructor(private entrepriseService: EntrepriseService,private toast:NgToastService,private router:ActivatedRoute) {
  }

  ngOnInit(): void {
    //this.id = localStorage.getItem('cle')
  }

  save() {
    this.id = this.router.snapshot.params['id'];
    this.entrepriseService.verif(this.id, this.code).subscribe((response) => {
      console.log(response)
      if (response == true) {
        console.log("code verifier ")
        this.toast.success({detail: 'Bravo..', summary: 'Le code de confirmation est équitable', position: 'br', duration: 7000})
      } else {
        console.log("code non verifier")
        this.toast.error({detail: 'Erreur...', summary: 'Code de confirmation est faux', position: 'br', duration: 5000})
      }
    });
  }
}
