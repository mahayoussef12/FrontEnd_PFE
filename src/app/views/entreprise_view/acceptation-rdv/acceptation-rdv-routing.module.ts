import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AcceptationRdvComponent} from "./acceptation-rdv/acceptation-rdv.component";

const routes: Routes = [
  {path:':id',component:AcceptationRdvComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcceptationRdvRoutingModule { }
