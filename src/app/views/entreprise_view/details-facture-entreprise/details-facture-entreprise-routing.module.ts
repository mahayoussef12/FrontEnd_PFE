import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailsFactureComponent} from "../../client_view/details-facture/details-facture.component";
import {DetailsFactureEntrepriseComponent} from "./details-facture-entreprise/details-facture-entreprise.component";

const routes: Routes = [
  {path:':id',component:DetailsFactureEntrepriseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsFactureEntrepriseRoutingModule { }
