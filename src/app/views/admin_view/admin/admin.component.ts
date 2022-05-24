import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../../../services/admin.service";
import {EntrepriseService} from "../../../services/entreprise.service";
import {ClientService} from "../../../services/client.service";
import {Entreprise} from "../../../Entreprise";
import {Client} from "../../../Client";
import {admin} from "../../../admin";

import {DatePipe} from "@angular/common";

import {ChartOptions, ChartType, ChartDataset} from 'chart.js';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  pipe = new DatePipe('en-US');
  entreprises: Entreprise[] | undefined
  entreprise: any;
  entrepriseId:any;
  clients: Client[] | undefined;
  admins: admin[] | undefined;
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {

        ticks: {
          min: 0,
          max: 10,
        }

    }
              }



  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataset[] = [];
  barChartLabels!: (string | null)[];
  barChartType: ChartType = 'line';
  barChartrep: ChartDataset[] = [];

  constructor(private route: ActivatedRoute,private adminService:AdminService,private clientservise:ClientService,private entrepriseService:EntrepriseService, private router: Router) { }

  ngOnInit(): void {


    this.adminService.getall().subscribe(prod => {
      this.admins = prod;
      console.log(this.admins)  }
    )
    this.entrepriseService.sumAllclient().subscribe(data => {
      console.log(data)
      this.barChartLabels = data.map(item => this.pipe.transform(item.type, 'd/M/yy, h:mm a'));
      this.barChartData = [

        {data: data.map(item => item.count), label: 'rendez_vous client '},

      ];
    });
    this.entrepriseService.sumAllentreprise().subscribe(rep => {
      console.log(rep)
      this.barChartLabels =rep.map(item => this.pipe.transform(item.date, 'd/M/yy, h:mm a'));
      this.barChartrep = [
        {data: rep.map(item => item.somme), label: 'rendez_vous entreprise'},

      ];
    });

  }

}
