import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailsFactureComponent} from "../details-facture.component";

const routes: Routes = [
  {path:':id',component:DetailsFactureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsFactureRoutingModule { }
