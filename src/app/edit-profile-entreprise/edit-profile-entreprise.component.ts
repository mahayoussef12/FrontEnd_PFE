import { Component, OnInit } from '@angular/core';
import {Entreprise} from "../Entreprise";
import {ActivatedRoute} from "@angular/router";
import {EntrepriseService} from "../services/entreprise.service";

@Component({
  selector: 'app-edit-profile-entreprise',
  templateUrl: './edit-profile-entreprise.component.html',
  styleUrls: ['./edit-profile-entreprise.component.css']
})
export class EditProfileEntrepriseComponent implements OnInit {
 employee!: Entreprise;
id: any;
   entrepriseId: any;
 entreprise!: Entreprise;

  constructor(private route: ActivatedRoute,private entrepriseService:EntrepriseService) { }

  ngOnInit(): void {
    this.employee = new Entreprise();

    this.id = this.route.snapshot.params['id'];

    this.entrepriseService.getEntrepriseById(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
    this.entrepriseId = this.route.snapshot.params["id"];
    console.log(this.entrepriseId)
    this.entrepriseService. getEntrepriseById(this.entrepriseId).subscribe((response)=>{
      this.entreprise = response
      /* localStorage.setItem('monObjet', JSON.stringify(this.entreprise.id))*/
    },(error) => {
      console.log(error)
    })
  }
  updateEmployee() {
    this.entrepriseService.updateEntreprise(this.id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.employee = new Entreprise();
        console.log("update avec success")
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateEmployee();
  }
}
