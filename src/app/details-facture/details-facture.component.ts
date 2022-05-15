import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FactureService} from "../services/facture.service";
import QRCode from "easyqrcodejs";
import domtoimage from "dom-to-image";

import {Facture} from "../Facture";



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

  constructor(private route: ActivatedRoute,private factureservice:FactureService, private router: Router,
              ) { }

  ngOnInit(): void {
    this.detailId = this.route.snapshot.params["id"];
    console.log(this.detailId)
    this.factureservice.getfacById(this.detailId).subscribe((response)=>{
      this.details = response
      localStorage.setItem('total', JSON.stringify(response.tolale_TTC));

      function addDaysToDate(date: any | number | Date, days: number): Date{
        var res = new Date(date);
        res.setDate(res.getDate() + days);
        return res;
      }
      this.x=addDaysToDate(this.details.date_creation,5);
      let codeText = 'BEGIN:VCARD\r\nVERSION:3.0\r\nN:';
      codeText += this.details.entreprise?.nomSociete +'\r\n';
      codeText += 'FN:' + this.details.entreprise?.nomSociete+ '\r\n';
      codeText += 'NOTE:' + this.details.description+ '\r\n';
      codeText += 'NOTE:' + 'Facture Non Payee' +this.details.tolale_TTC+ '\r\n';
      codeText += 'END:VCARD';
      codeText = decodeURIComponent(codeText);

      console.log(codeText);
      let imagesize = 150;
      if (screen.width < 480) { imagesize = 110; }
      console.log(imagesize);

      const config = {
        title: 'Logo',
        config: {
          text: codeText, // Content
          width: imagesize, // Widht
          height: imagesize, // Height
          colorDark: '#000000', // Dark color
          colorLight: '#ffffff', // Light color
          // === Logo
          logo: 'assets/logo.png', // LOGO
          logoBackgroundColor: '#ffffff', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
          logoBackgroundTransparent: false, // Whether use transparent image, default is false
          correctLevel: QRCode.CorrectLevel.L // L, M, Q, H
        }
      };
      if (this.qrcode != null) { this.qrcode.clear(); }
      this.qrcode = new QRCode(document.getElementById('qrcode'), config.config);
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
