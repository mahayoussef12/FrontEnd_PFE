import { Component, OnInit } from '@angular/core';
import {Entreprise} from "../../../Entreprise";
import {ActivatedRoute, Router} from "@angular/router";
import {EntrepriseService} from "../../../services/entreprise.service";
import {NgToastService} from "ng-angular-popup";

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

  constructor(private route: ActivatedRoute,private entrepriseService:EntrepriseService, private router: Router,private toast:NgToastService) { }

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
        this.toast.success({detail:'Success',summary:'This is Success',position:'br',duration:5000})
        this.router.navigate(['profile_entreprise/',this.id])
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateEmployee();
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
  avis(id: any) {
    this.router.navigate(['avis_en/',id])

  }
  rdv(id: any) {

    this.router.navigate(['rddv/',id])
  }

}
