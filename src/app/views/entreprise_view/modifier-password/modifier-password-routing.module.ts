import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ModifierPasswordComponent} from "./modifier-password/modifier-password.component";

const routes: Routes = [
  {path:":id",component:ModifierPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModifierPasswordRoutingModule { }
