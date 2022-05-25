import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModifierPasswordRoutingModule } from './modifier-password-routing.module';
import { ModifierPasswordComponent } from './modifier-password/modifier-password.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ModifierPasswordComponent
  ],
  imports: [
    CommonModule,
    ModifierPasswordRoutingModule,
    FormsModule
  ]
})
export class ModifierPasswordModule { }
