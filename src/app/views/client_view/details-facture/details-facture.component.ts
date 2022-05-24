import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FactureService} from "../../../services/facture.service";
import QRCode from "easyqrcodejs";
import domtoimage from "dom-to-image";
import * as bcrypt from 'bcryptjs';
import {Facture} from "../../../Facture";




@Component({
  selector: 'app-details-facture',
  templateUrl: './details-facture.component.html',
  styleUrls: ['./details-facture.component.css']
})
export class DetailsFactureComponent implements OnInit {
 detailId: any;
 details!: Facture;
letre: any;
 tv: any;
 x!: Date;
  public qrcode: any = null;
 code!: string;
 pass: any;
  qrdata! :string;

  constructor(private route: ActivatedRoute,private factureservice:FactureService, private router: Router,
              ) { }

  ngOnInit(): void {
    this.detailId = this.route.snapshot.params["id"];
    console.log(this.detailId)
    this.factureservice.getfacById(this.detailId).subscribe((response)=>{
      this.details = response
      this.code=this.details.tolale_TTC+""+this.details.entreprise?.nomSociete+this.details.num_facture
      console.log(this.code)
      this.pass =bcrypt.hashSync(this.code, 5)
      console.log(this.pass)
      this.qrdata=this.pass+    "lien:http://www.mawaaied.com"
      localStorage.setItem('total', JSON.stringify(response.tolale_TTC));

      function addDaysToDate(date: any | number | Date, days: number): Date{
        var res = new Date(date);
        res.setDate(res.getDate() + days);
        return res;
      }
      this.x=addDaysToDate(this.details.date_creation,5);

    },(error) => {
      console.log(error);
    })
    this.factureservice.lettre(this.detailId).subscribe((rep)=>{
      console.log(rep)
      this.letre=rep
    },(error) => {
      console.log(error);
    })
    this.factureservice.tva(this.detailId).subscribe((data)=>{
      console.log(data)
      this.tv=data
    },(error) => {
      console.log(error);
    })
  }


  onPrint(): void {
    window.print();
  }


  paypal() {
    this.router.navigate(['payment'])
  }
}
