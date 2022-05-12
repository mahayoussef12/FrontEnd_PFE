import { Component, OnInit } from '@angular/core';
import {Facture} from "../Facture";
import {ActivatedRoute, Router} from "@angular/router";
import {FactureService} from "../services/facture.service";
import {VCardFormatter} from "ngx-vcard";
import QRCode from "easyqrcodejs";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  details!:Facture
  detailId: any;
  date!:Date;
  today:any;
  h: any;
  public qrcode: any = null;
  constructor(private route: ActivatedRoute,private factureservice:FactureService, private router: Router) { }



  ngOnInit(): void {
    this.detailId = this.route.snapshot.params["id"];

    this.factureservice.getfacById(this.detailId).subscribe((response)=>{
      this.details = response
      console.log(this.details)
      this.details.entreprise?.email
      this.date = new Date();
      let codeText = 'BEGIN:VCARD\r\nVERSION:3.0\r\nN:';
      codeText += 'FN:' + this.details.client?.nom + '\r\n';
      codeText += 'END:VCARD';
      codeText = decodeURIComponent(codeText);

      console.log(codeText);
      let imagesize = 100;
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

/*

      this.vCard= {
        title: "Facture du client:   "+this.details.client?.nom,
        note:"Montant:   "+this.details.tolale_TTC+"Non Payee",
        /!*        url: {
                  work: "http://localhost:4200"
                },*!/
      };
      this.vCardString = VCardFormatter.getVCardAsString(this.vCard);

*/






    },(error) => {
      console.log(error);
    })



  }



  onPrint() {
    window.print();
  }
}

