import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdFacComponent} from "./ad-fac/ad-fac.component";

const routes: Routes = [
  {path:"",component:AdFacComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdFacRoutingModule { }
