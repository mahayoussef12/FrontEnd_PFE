import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompteEnClientComponent} from "./compte-en-client.component";

const routes: Routes = [
  {path:':id',component:CompteEnClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompteEnClientRoutingModule { }
