import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendrerEntrepriseComponent} from "../calendrer-entreprise.component";

const routes: Routes = [
  {path:":id",component:CalendrerEntrepriseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendrerEntrepriseRoutingModule { }
