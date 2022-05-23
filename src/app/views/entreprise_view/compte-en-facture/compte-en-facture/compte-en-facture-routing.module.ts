import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompteEnFactureComponent} from "../compte-en-facture.component";

const routes: Routes = [
  {path:':id',component:CompteEnFactureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompteEnFactureRoutingModule { }
