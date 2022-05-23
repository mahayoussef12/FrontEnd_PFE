import {ClientService} from "../../services/client.service";
import {Client} from "../../Client";
import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {EntrepriseService} from "../../services/entreprise.service";
import {Entreprise} from "../../Entreprise";
import {AvisService} from "../../services/avis.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  categorie!: string | null;
  nom!: string | null;
  entreprise!: Entreprise[];
   aviss:any;

  constructor(private entrepriseService:EntrepriseService, private activatedRoute: ActivatedRoute,private router:Router,private avisservice:AvisService) {
  }
  ngOnInit(): void {
    this.entrepriseService.getAllVille(this.activatedRoute.snapshot.params["categorie"],this.activatedRoute.snapshot.params["ville"]).subscribe(prod => {
      this.entreprise = prod;
      console.log(prod)

      for (var val of this.entreprise)
        this.avisservice.count(val.id).subscribe(prod => {
          this.aviss = prod;

        }
        )

    });

  }
  profile(societe: Entreprise) {
    this.router.navigate(['en/', societe.id]);
  }
  next(id: any) {
    this.router.navigate (['user-search/',id])
  }
}
