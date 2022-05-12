import { Component, OnInit } from '@angular/core';
import {Client} from "../Client";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../services/client.service";

@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.component.html',
  styleUrls: ['./profile-client.component.css']
})
export class ProfileClientComponent implements OnInit {
  detailId:any;
  details!:Client

  constructor(private route: ActivatedRoute,private clientservice:ClientService, private router: Router) { }


  ngOnInit(): void {
    localStorage.removeItem("monObjet");
    this.detailId = this.route.snapshot.params["id"];
    console.log(this.detailId)
    this.clientservice.getClientById(this.detailId).subscribe((response)=>{
      this.details = response
      localStorage.setItem('monObjet', JSON.stringify(this.details.id));
    },(error) => {
      console.log(error);
    })

  }

  next() {
    this.router.navigate(['dashbord/',localStorage.getItem('monObjet')]);

  }

  gotoeditprofile() {
    this.router.navigate(["edit_client/",this.details.id])
  }

  delete(details: Client) {
    let conf = confirm("Etes-vous sûr du supprimer ?");
    if (conf)
      this.clientservice.deleteClient(details.id).subscribe(() => {
        console.log("supprimé");
        this.router.navigate([""])
        // window.location.reload()
      })
  }
}
