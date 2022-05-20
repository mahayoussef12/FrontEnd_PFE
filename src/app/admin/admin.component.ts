import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../services/admin.service";
import {EntrepriseService} from "../services/entreprise.service";
import {ClientService} from "../services/client.service";
import {Entreprise} from "../Entreprise";
import {Client} from "../Client";
import {admin} from "../admin";
import {ChartDataset, ChartOptions, ChartType} from "chart.js";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  entreprises: Entreprise[] | undefined
  entreprise: any;
  entrepriseId:any;
  clients: Client[] | undefined;
  admins: admin[] | undefined;
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataset[] = [];
  barChartLabels!: any[];
  barChartType: ChartType = 'line';
  barChartrep: ChartDataset[] = [];


  constructor(private route: ActivatedRoute,private adminService:AdminService,private clientservise:ClientService,private entrepriseService:EntrepriseService, private router: Router) { }

  ngOnInit(): void {
    this.entrepriseService.getAllEntreprise().subscribe(prod => {
      this.entreprises = prod;})
    console.log(this.entreprises)

    this.adminService.getall().subscribe(prod => {
      this.admins = prod;
      console.log(this.admins)  }
    )
    this.clientservise.getAllCliens().subscribe(prod => {
      this.clients = prod;
      console.log(this.clients)  }
    )
    this.clientservise.getAllCliens().subscribe(prod => {
      this.clients = prod;
      console.log(this.clients)  }
    )
    this.entrepriseService.sumAllclient().subscribe(data => {
      console.log(data)
      this.barChartLabels = data.map(item => item.type);
      this.barChartData = [
        {data: data.map(item => item.count), label: 'rendez_vous client '},

      ];
    });
    this.entrepriseService.sumAllentreprise().subscribe(rep => {
      console.log(rep)
      this.barChartLabels = rep.map(item => item.date);
      this.barChartrep = [
        {data: rep.map(item => item.somme), label: 'rendez_vous entreprise'},

      ];
    });

  }

  next(id:any) {


    this.router.navigate(['compte_entreprise/',id])
  }
  profile(){
    this.router.navigate(['admin'])
  }


  adminEntreprise()
  {
    this.router.navigate(['super_admin/entreprise'])
  }


  adminClient() {
    this.router.navigate(['super_admin/client'])
  }
}
