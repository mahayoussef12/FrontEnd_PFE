import { Component, OnInit } from '@angular/core';
import {ChartDataset, ChartOptions, ChartType} from "chart.js";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../../../services/client.service";
import {EntrepriseService} from "../../../services/entreprise.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataset[] = [];
  barChartLabels!: any[];
  barChartType: ChartType = 'line';
detailId: any;
  pipe = new DatePipe('en-US');

  constructor(private route: ActivatedRoute,private clientservice:ClientService, private router: Router,private entrepriseService:EntrepriseService) { }

  ngOnInit(): void {
    this.detailId = this.route.snapshot.params["id"];
    console.log(this.detailId)
    this.clientservice. getClientById( this.detailId ).subscribe((response)=>{
      console.log(response)
    },(error) => {
      console.log(error);
    })


    this.entrepriseService.testcountclient(this.detailId).subscribe(data => {
      console.log(data)
      this.barChartLabels = data.map(item => this.pipe.transform(item.type, 'd/M/yy, h:mm a'));
      this.barChartData = [
        {data: data.map(item => item.count), label: 'rendez_vous'},

      ];
    });
  }

}
