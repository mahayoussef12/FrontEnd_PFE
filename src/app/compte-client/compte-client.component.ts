import { Component, OnInit } from '@angular/core';
import {Client} from "../Client";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../services/client.service";
import {ChartDataset, ChartOptions, ChartType} from "chart.js";
import {EntrepriseService} from "../services/entreprise.service";

@Component({
  selector: 'app-compte-client',
  templateUrl: './compte-client.component.html',
  styleUrls: ['./compte-client.component.css']
})
export class CompteClientComponent implements OnInit {

  detailId:any;
  client!:Client
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataset[] = [];
  barChartLabels!: any[];
  barChartType: ChartType = 'line';

  constructor(private route: ActivatedRoute,private clientservice:ClientService, private router: Router,private entrepriseService:EntrepriseService) { }


  ngOnInit(): void {

    this.detailId = this.route.snapshot.params["id"];
    console.log(this.detailId)
    this.clientservice. getClientById(this.detailId).subscribe((response)=>{
      this.client = response
        },(error) => {
      console.log(error);
    })
    this.entrepriseService.testcountclient(this.route.snapshot.params["id"]).subscribe(data => {
      console.log(data)
      this.barChartLabels = data.map(item => item.type);
      this.barChartData = [
        {data: data.map(item => item.count), label: 'rendez_vous'},

      ];
    });
  }

  profile(id: any) {
    this.router.navigate(['profile/',id])
  }

  accuiel(id: any) {

    this.router.navigate(['compte/',id])
  }

  facture(id: any) {
    this.router.navigate(['All_facture_Client/',id])
  }

  rendez_vous(id: any) {

    this.router.navigate(['calendrier/',id])

  }

  edit(id: any) {
    this.router.navigate(['edit_client/',id])
  }
}
