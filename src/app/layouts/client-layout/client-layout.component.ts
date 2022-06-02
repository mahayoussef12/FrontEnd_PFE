import { Component, OnInit } from '@angular/core';
import {Client} from "../../Client";
import {ChartDataset, ChartOptions, ChartType} from "chart.js";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../../services/client.service";
import {EntrepriseService} from "../../services/entreprise.service";
import {HttpErrorResponse, HttpEvent} from "@angular/common/http";

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {

  detailId:any;
  client!:Client
  test!: HttpEvent<Blob>;
  image: any;


  constructor(private route: ActivatedRoute,public clientservice:ClientService, private router: Router,private entrepriseService:EntrepriseService) { }


  ngOnInit(): void {
    this.detailId = this.route.snapshot.params["id"];
    console.log(this.detailId)
    this.clientservice. getClientById( this.detailId ).subscribe((response)=>{
      this.client = response

    })
  }

}
