import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServiceenComponent} from "./serviceen/serviceen.component";

const routes: Routes = [
  {path:"",component:ServiceenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceenRoutingModule { }
