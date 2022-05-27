import { NgModule } from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";


@NgModule( {
    imports: [
        MatGridListModule,
        MatInputModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatSnackBarModule
    ],
    declarations: [],
    exports: [
        MatGridListModule,
        MatInputModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatSnackBarModule
    ]
} )
export class SharedModule {

}
