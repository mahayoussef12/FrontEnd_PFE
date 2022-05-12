import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EntrepriseService} from "../services/entreprise.service";
import {Entreprise} from "../Entreprise";

@Component({
  selector: 'app-calendrer-entreprise',
  templateUrl: './calendrer-entreprise.component.html',
  styleUrls: ['./calendrer-entreprise.component.css']
})
export class CalendrerEntrepriseComponent implements OnInit {
 entrepriseId: any;
 entreprise!: Entreprise;

  constructor(private route: ActivatedRoute,private entrepriseService:EntrepriseService, private router: Router) { }


  ngOnInit(): void {
    this.entrepriseId = this.route.snapshot.params["id"];
    console.log(this.entrepriseId)
    this.entrepriseService.getEntrepriseById(this.entrepriseId).subscribe((response) => {
      this.entreprise = response
    })
  }

}
