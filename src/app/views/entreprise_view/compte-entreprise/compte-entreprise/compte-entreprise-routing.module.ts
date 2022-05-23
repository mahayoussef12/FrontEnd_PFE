import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompteEntrepriseComponent} from "../compte-entreprise.component";

const routes: Routes = [
  {path:":id",component:CompteEntrepriseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompteEntrepriseRoutingModule { }
