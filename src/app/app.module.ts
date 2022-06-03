import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SearchComponent } from './search_view/search/search.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CompteEntrepriseComponent } from './views/entreprise_view/compte-entreprise/compte-entreprise.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgChartsModule } from 'ng2-charts';
import { ProfileEntrepriseComponent } from './views/entreprise_view/profile-entreprise/profile-entreprise.component';
import { SearchUserComponent } from './search_view/search-user/search-user.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ContactComponent } from './contact/contact.component';
import { SearchCategorieComponent } from './search_view/search-categorie/search-categorie.component';
import { SearchVilleComponent } from './search_view/search-ville/search-ville.component';
import { AvisComponent } from './avis/avis.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  FacebookLoginProvider, GoogleLoginProvider,
} from 'angularx-social-login';
import { environment } from "../environments/environment";
import { initializeApp } from 'firebase/app';
import { DetailsEntrepriseInscriComponent } from './details-entreprise-inscri/details-entreprise-inscri.component';
initializeApp(environment.firebase);
import {DayPilotModule} from 'daypilot-pro-angular';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { CalendrerEntrepriseComponent } from './calendrer-entreprise/calendrer-entreprise.component';
import { CalendComponent } from './calendrer-entreprise/calend/calend.component';
import { DetailsFactureComponent } from './views/client_view/details-facture/details-facture.component';
import { CompteEnFactureComponent } from './views/entreprise_view/compte-en-facture/compte-en-facture.component';
import { TicketComponent } from './ticket/ticket.component';
import { EditProfileEntrepriseComponent } from './views/entreprise_view/edit-profile-entreprise/edit-profile-entreprise.component';
import { CompteEnClientComponent } from './views/client_view/compte-en-client/compte-en-client.component';
import { PayementPaypalComponent } from './payement-paypal/payement-paypal.component';
import { AdminComponent } from './views/admin_view/admin/admin.component';
import { SuperadminClientComponent } from './views/admin_view/superadmin-client/superadmin-client.component';
import { SuperadminComponent } from './views/admin_view/superadmin/superadmin.component';
import {NgToastModule} from "ng-angular-popup";
import { IncriEntrepriseComponent } from './inscription_entreprise/incri-entreprise/incri-entreprise.component';
import { RdvEntrepriseComponent } from './views/entreprise_view/rdv-entreprise/rdv-entreprise.component';
import { HoraireEntrepriseComponent } from './inscription_entreprise/horaire-entreprise/horaire-entreprise.component';
import { AvisEntrepriseComponent } from './views/entreprise_view/avis-entreprise/avis-entreprise.component';
import { CodeConfirmationComponent } from './code-confirmation/code-confirmation.component';
import {LayoutsModule} from "./layouts/layouts.module";
import { EditProfileComponent } from './views/client_view/edit-profile/edit-profile.component';
import {SchedulerModule} from "./calendrier/scheduler/scheduler.module";
import { InscriptionClientComponent } from './inscription-client/inscription-client.component';
import {FormatTimePipe, TvComponent} from './tv/tv.component';
import {QRCodeModule} from "angularx-qrcode";
import { PrendreRdvComponent } from './prendre-rdv/prendre-rdv.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {AngularMyDatePickerModule} from "angular-mydatepicker";
import { RdvComponent } from './rdv/rdv.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { TestComponent } from './test/test.component';
import { EntrepriseServiceComponent } from './inscription_entreprise/entreprise-service/entreprise-service.component'
import {MatCardModule} from "@angular/material/card";
import {NgxMatDatetimePickerModule, NgxMatTimepickerModule} from "@angular-material-components/datetime-picker";
import {MatListModule} from "@angular/material/list";
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";
import { CodeconclientComponent } from './codeconclient/codeconclient.component';
@NgModule({
  declarations: [
    FormatTimePipe,
    AppComponent,
    HomeComponent,
    SearchComponent,
    LoginComponent,
    NotfoundComponent,
    CompteEntrepriseComponent,
    ProfileEntrepriseComponent,
    SearchUserComponent,
    ContactComponent,
    SearchCategorieComponent,
    SearchVilleComponent,
    AvisComponent,
    DetailsEntrepriseInscriComponent,
    CalendrierComponent,
    SuperadminClientComponent,
    CalendrerEntrepriseComponent,CalendComponent, DetailsFactureComponent, CompteEnFactureComponent, TicketComponent, EditProfileEntrepriseComponent, CompteEnClientComponent, PayementPaypalComponent, AdminComponent, SuperadminComponent, IncriEntrepriseComponent, RdvEntrepriseComponent, HoraireEntrepriseComponent, AvisEntrepriseComponent, CodeConfirmationComponent, EditProfileComponent, InscriptionClientComponent, TvComponent, PrendreRdvComponent, RdvComponent, TestComponent, EntrepriseServiceComponent, CodeconclientComponent
  ],
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }), NgChartsModule, ReactiveFormsModule, NgxStarRatingModule, SocialLoginModule, DayPilotModule, SchedulerModule,
    NgToastModule, LayoutsModule, QRCodeModule, BrowserAnimationsModule, AngularMyDatePickerModule, NgxPaginationModule, MatCardModule, NgxMatDatetimePickerModule, NgxMatTimepickerModule, MatListModule, MatStepperModule, MatButtonModule
  ],
  providers: [ {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('29518537340-uo0lsrg8bi59e1d35v97a4inpkrad0oh.apps.googleusercontent.com'),
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider(
            '383285173700234'
          )
        }
      ],
    } as SocialAuthServiceConfig,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }


