import { Component, OnInit } from '@angular/core';
import {Entreprise} from "../Entreprise";
import {ActivatedRoute, Router} from "@angular/router";
import {EntrepriseService} from "../services/entreprise.service";
import QRCode from "easyqrcodejs";
import domtoimage from "dom-to-image";

@Component({
  selector: 'app-details-entreprise-inscri',
  templateUrl: './details-entreprise-inscri.component.html',
  styleUrls: ['./details-entreprise-inscri.component.css']
})
export class DetailsEntrepriseInscriComponent implements OnInit {

  entrepriseId:any;
  entreprise!:Entreprise;
  public qrcode: any = null;
  constructor(private route: ActivatedRoute,private entrepriseService:EntrepriseService, private router: Router) { }


  ngOnInit(): void {
    this.entrepriseId = this.route.snapshot.params["id"];
    console.log(this.entrepriseId)
    this.entrepriseService. getEntrepriseById(this.entrepriseId).subscribe((response)=>{
      this.entreprise = response
      let codeText = 'BEGIN:VCARD\r\nVERSION:3.0\r\nN:';
      codeText += this.entreprise.nomSociete +'\r\n';
      codeText += 'FN:' + this.entreprise.nomSociete + '\r\n';
      codeText += 'ADR:' + this.entreprise.adresse+''+this.entreprise.ville+ '\r\n';
      codeText += 'URL:' + this.entreprise.email + '\r\n';
      codeText += 'TEL;WORK:' + this.entreprise.tel+ '\r\n';
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
      console.log(error)
    })

  }

  saveImage(): void {
    const node = document.getElementById('image-content')!;
    domtoimage.toPng(node)
      .then((dataUrl: string) => {
        // tslint:disable-next-line: prefer-const
        let img = new Image();
        img.src = dataUrl;
        const link = document.createElement('a');
        link.download = 'qr-screen.png';
        link.href = dataUrl;
        link.click();
        link.remove();
      })
      .catch((error: any) => {
        console.error('oops, something went wrong!', error);
      });
  }



}
