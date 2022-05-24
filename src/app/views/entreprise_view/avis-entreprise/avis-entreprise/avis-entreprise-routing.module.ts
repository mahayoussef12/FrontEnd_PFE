import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AvisEntrepriseComponent} from "../avis-entreprise.component";

const routes: Routes = [
  {path:':id',component:AvisEntrepriseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvisEntrepriseRoutingModule { }
