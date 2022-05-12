import { Component, OnInit } from '@angular/core';
import {Client} from "../Client";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../services/client.service";

@Component({
  selector: 'app-compte-client',
  templateUrl: './compte-client.component.html',
  styleUrls: ['./compte-client.component.css']
})
export class CompteClientComponent implements OnInit {

  detailId:any;
  client!:Client
  constructor(private route: ActivatedRoute,private clientservice:ClientService, private router: Router) { }


  ngOnInit(): void {

    this.detailId = this.route.snapshot.params["id"];
    console.log(this.detailId)
    this.clientservice. getClientById(this.detailId).subscribe((response)=>{
      this.client = response
        },(error) => {
      console.log(error);
    })

  }

}
