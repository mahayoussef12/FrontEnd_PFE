import { Component, OnInit } from '@angular/core';
import {Entreprise} from "../../../Entreprise";
import {EntrepriseService} from "../../../services/entreprise.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ChartData, ChartDataset, ChartOptions, ChartType} from 'chart.js';
import {coutType} from "../../../coutType";

@Component({
  selector: 'app-compte-entreprise',
  templateUrl: './compte-entreprise.component.html',
  styleUrls: ['./compte-entreprise.component.css']
})
export class CompteEntrepriseComponent implements OnInit {

  entrepriseId:any;
  entreprise!:Entreprise;
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataset[] = [];
  barChartLabels!: any[];
  barChartType: ChartType = 'line';

  test!: coutType
  constructor(private route: ActivatedRoute,private entrepriseService:EntrepriseService, private router: Router) { }


  ngOnInit(): void {
    this.entrepriseId = this.route.snapshot.params["id"];
    console.log(this.entrepriseId)
    this.entrepriseService. getEntrepriseById(this.entrepriseId).subscribe((response)=>{
      console.log(response)
      this.entreprise = response
      /* localStorage.setItem('monObjet', JSON.stringify(this.entreprise.id))*/
    },(error) => {
      console.log(error)
    })
    this.entrepriseService.testcount(this.route.snapshot.params["id"]).subscribe(data => {
      console.log(data)
      this.barChartLabels = data.map(item => item.type);
      this.barChartData = [
        {data: data.map(item => item.count), label: 'rendez_vous'},

      ];
    });
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
