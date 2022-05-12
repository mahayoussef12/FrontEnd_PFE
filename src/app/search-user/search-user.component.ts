import { Component, OnInit } from '@angular/core';
import {EntrepriseService} from "../services/entreprise.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Entreprise} from "../Entreprise";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  entreprise!: Entreprise;
  private entrepriseId: any;
  constructor( private entrepriseService: EntrepriseService, private activatedRoute: ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
    this.entrepriseId = this.activatedRoute.snapshot.params["id"];
    console.log(this.entrepriseId)
    this.entrepriseService.getEntrepriseById(this.entrepriseId).subscribe((response) => {
      this.entreprise = response
    })
  }
}

