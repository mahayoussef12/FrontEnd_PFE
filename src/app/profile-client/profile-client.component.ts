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
  client!:Client

  constructor(private route: ActivatedRoute,private clientservice:ClientService, private router: Router) { }


  ngOnInit(): void {

    this.detailId = this.route.snapshot.params["id"];
    console.log(this.detailId)
    this.clientservice.getClientById(this.detailId).subscribe((response)=>{
      this.client = response

    },(error) => {
      console.log(error);
    })

  }

  next() {
    this.router.navigate(['dashbord/',localStorage.getItem('monObjet')]);

  }

  gotoeditprofile() {
    this.router.navigate(["edit_client/",this.client.id])
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
  profile(id: any) {
    this.router.navigate(['profile/',id])
  }

  accuiel(id: any) {

    this.router.navigate(['compte/',id])
  }

  facture(id: any) {

  }

  rendez_vous(id: any) {

    this.router.navigate(['calendrier/',id])

  }
  edit(id: any) {
    this.router.navigate(['edit_client/',id])
  }
}
