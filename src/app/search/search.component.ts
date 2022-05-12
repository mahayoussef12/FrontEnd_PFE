import {ClientService} from "../services/client.service";
import {Client} from "../Client";
import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {EntrepriseService} from "../services/entreprise.service";
import {Entreprise} from "../Entreprise";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  categorie!: string | null;
  nom!: string | null;
  entreprise!: Entreprise[];

  constructor(private entrepriseService:EntrepriseService, private activatedRoute: ActivatedRoute,private router:Router) {
  }
  ngOnInit(): void {
    this.entrepriseService.getAllVille(this.activatedRoute.snapshot.params["categorie"],this.activatedRoute.snapshot.params["ville"]).subscribe(prod => {
      this.entreprise = prod;
      console.log(prod)
    });
  }
  profile(societe: Entreprise) {
    this.router.navigate(['en/', societe.id]);
  }
  next(id: any) {
    this.router.navigate (['user-search/',id])
  }
}
