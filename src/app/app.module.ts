import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SearchComponent } from './search/search.component';
import { CompteClientComponent } from './compte-client/compte-client.component';
import { ProfileClientComponent } from './profile-client/profile-client.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CompteEntrepriseComponent } from './compte-entreprise/compte-entreprise.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgChartsModule } from 'ng2-charts';
import { ProfileEntrepriseComponent } from './profile-entreprise/profile-entreprise.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ContactComponent } from './contact/contact.component';
import { SearchCategorieComponent } from './search-categorie/search-categorie.component';
import { SearchVilleComponent } from './search-ville/search-ville.component';
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
import { SchedulerModule } from './calendrier/scheduler/scheduler.module';
import { DetailsFactureComponent } from './details-facture/details-facture.component';
import { CompteEnFactureComponent } from './compte-en-facture/compte-en-facture.component';
import { TicketComponent } from './ticket/ticket.component';
import { EditProfileEntrepriseComponent } from './edit-profile-entreprise/edit-profile-entreprise.component';
import { EditProfileClientComponent } from './edit-profile-client/edit-profile-client.component';
import { CompteEnClientComponent } from './compte-en-client/compte-en-client.component';
import { UpdateCalendrierComponent } from './update-calendrier/update-calendrier.component';
import { PayementPaypalComponent } from './payement-paypal/payement-paypal.component';
import { ChoisirTypeCompteComponent } from './choisir-type-compte/choisir-type-compte.component';
import { InsripClientComponent } from './insrip-client/insrip-client.component';
import { AdminComponent } from './admin/admin.component';
import { SuperadminClientComponent } from './superadmin-client/superadmin-client.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { TestComponent } from './test/test.component';
import {NgToastModule} from "ng-angular-popup";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    CompteClientComponent,
    ProfileClientComponent,
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
    CalendrerEntrepriseComponent,CalendComponent, DetailsFactureComponent, CompteEnFactureComponent, TicketComponent, EditProfileEntrepriseComponent, EditProfileClientComponent, CompteEnClientComponent, UpdateCalendrierComponent, PayementPaypalComponent, ChoisirTypeCompteComponent, InsripClientComponent, AdminComponent, SuperadminComponent, TestComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }), NgChartsModule, ReactiveFormsModule, NgxStarRatingModule,SocialLoginModule,DayPilotModule,SchedulerModule,
    NgToastModule
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


