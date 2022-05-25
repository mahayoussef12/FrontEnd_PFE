import { Component, OnInit } from '@angular/core';
import * as bcrypt from 'bcryptjs';
import {EntrepriseService} from "../../../../services/entreprise.service";
import {ActivatedRoute} from "@angular/router";
import {Entreprise} from "../../../../Entreprise";
import {NgToastService} from "ng-angular-popup";
@Component({
  selector: 'app-modifier-password',
  templateUrl: './modifier-password.component.html',
  styleUrls: ['./modifier-password.component.css']
})
export class ModifierPasswordComponent implements OnInit {
  lastpsswd!: string;
entrepriseId: any;
   entreprise!: Entreprise;
  nvpsswd!: any;

  constructor(private entrepriseService: EntrepriseService,private route: ActivatedRoute,private toast:NgToastService) { }

  ngOnInit(): void {
    this.entrepriseId = this.route.snapshot.params["id"];
    console.log(this.entrepriseId)
    this.entrepriseService.getEntrepriseById(this.entrepriseId).subscribe((response) => {
      console.log(response)
      this.entreprise = response
      /* localStorage.setItem('monObjet', JSON.stringify(this.entreprise.id))*/
    }, (error) => {
      console.log(error)
    })
  }

  modifier() {
   // console.log(this.lastpsswd)
    if(bcrypt.compareSync(this.lastpsswd,<string> this.entreprise.mdp)) {
      this.entrepriseService.update(this.entrepriseId, this.nvpsswd).subscribe((response) => {
        console.log(response)
        if (response == true) {
          console.log("update  ")
          this.toast.success({
            detail: 'Bravo..',
            summary: 'la Changement mot de passe est parfaite ',
            position: 'br',
            duration: 7000
          })
        } else {
          console.log("non update")
          this.toast.error({detail: 'Erreur...', summary: 'la Changement non parfaite', position: 'br', duration: 5000})
        }
      })
    }
    else{
      this.toast.warning({detail: 'Warring', summary: 'verifier votre mot de passe ', position: 'br', duration: 5000})

    }
   {

    }
  }
}
