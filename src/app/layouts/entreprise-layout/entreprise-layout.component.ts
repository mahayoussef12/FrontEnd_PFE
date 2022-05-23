import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EntrepriseService} from "../../services/entreprise.service";
import {Entreprise} from "../../Entreprise";
import {ChartDataset, ChartOptions, ChartType} from "chart.js";
import {coutType} from "../../coutType";

@Component({
  selector: 'app-entreprise-layout',
  templateUrl: './entreprise-layout.component.html',
  styleUrls: ['./entreprise-layout.component.css']
})
export class EntrepriseLayoutComponent implements OnInit {
 entrepriseId: any;
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
  constructor(private route: ActivatedRoute, private entrepriseService: EntrepriseService, private router: Router) {
  }


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
    this.entrepriseService.testcount(this.route.snapshot.params["id"]).subscribe(data => {
      console.log(data)
      this.barChartLabels = data.map(item => item.type);
      this.barChartData = [
        {data: data.map(item => item.count), label: 'rendez_vous'},

      ];
    });
  }
}

