import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsFactureEntrepriseRoutingModule } from './details-facture-entreprise-routing.module';
import { DetailsFactureEntrepriseComponent } from './details-facture-entreprise/details-facture-entreprise.component';
import {QRCodeModule} from "angularx-qrcode";


@NgModule({
  declarations: [
    DetailsFactureEntrepriseComponent
  ],
    imports: [
        CommonModule,
        DetailsFactureEntrepriseRoutingModule,
        QRCodeModule
    ]
})
export class DetailsFactureEntrepriseModule { }
