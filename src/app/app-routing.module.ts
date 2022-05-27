import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SearchComponent} from "./search_view/search/search.component";
import {LoginComponent} from "./login/login.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {CompteEntrepriseComponent} from "./views/entreprise_view/compte-entreprise/compte-entreprise.component";
import {ProfileEntrepriseComponent} from "./views/entreprise_view/profile-entreprise/profile-entreprise.component";
import {SearchUserComponent} from "./search_view/search-user/search-user.component";
import {ContactComponent} from "./contact/contact.component";
import {SearchCategorieComponent} from "./search_view/search-categorie/search-categorie.component";
import {SearchVilleComponent} from "./search_view/search-ville/search-ville.component";
import {AvisComponent} from "./avis/avis.component";
import {DetailsEntrepriseInscriComponent} from "./details-entreprise-inscri/details-entreprise-inscri.component";

import {CalendrerEntrepriseComponent} from "./calendrer-entreprise/calendrer-entreprise.component";
import {DetailsFactureComponent} from "./views/client_view/details-facture/details-facture.component";
import {CompteEnFactureComponent} from "./views/entreprise_view/compte-en-facture/compte-en-facture.component";
import {TicketComponent} from "./ticket/ticket.component";
import {EditProfileEntrepriseComponent} from "./views/entreprise_view/edit-profile-entreprise/edit-profile-entreprise.component";
import {CompteEnClientComponent} from "./views/client_view/compte-en-client/compte-en-client.component";
import {PayementPaypalComponent} from "./payement-paypal/payement-paypal.component";
import {AdminComponent} from "./views/admin_view/admin/admin.component";
import {SuperadminComponent} from "./views/admin_view/superadmin/superadmin.component";
import {SuperadminClientComponent} from "./views/admin_view/superadmin-client/superadmin-client.component";

import {IncriEntrepriseComponent} from "./inscription_entreprise/incri-entreprise/incri-entreprise.component";
import {RdvEntrepriseComponent} from "./views/entreprise_view/rdv-entreprise/rdv-entreprise.component";
import {HoraireEntrepriseComponent} from "./inscription_entreprise/horaire-entreprise/horaire-entreprise.component";
import {AvisEntrepriseComponent} from "./views/entreprise_view/avis-entreprise/avis-entreprise.component";
import {CodeConfirmationComponent} from "./code-confirmation/code-confirmation.component";

import {ClientLayoutComponent} from "./layouts/client-layout/client-layout.component";
import {EntrepriseLayoutComponent} from "./layouts/entreprise-layout/entreprise-layout.component";
import {InscriptionClientComponent} from "./inscription-client/inscription-client.component";
import {LayoutAdminComponent} from "./layouts/layout-admin/layout-admin.component";
import {TvComponent} from "./tv/tv.component";
import {PrendreRdvComponent} from "./prendre-rdv/prendre-rdv.component";
import {RdvComponent} from "./rdv/rdv.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:categorie/:ville',component:SearchComponent},
  {path:'login',component:LoginComponent},
  {path:'user-search/:id',component:SearchUserComponent},
  {path:'contact',component:ContactComponent},
  {path:'search_categorie/:categorie',component:SearchCategorieComponent},
  {path:'search_ville/:ville',component:SearchVilleComponent},
  {path:'avis/:id',component:AvisComponent},
  {path:'details/:id',component:DetailsEntrepriseInscriComponent},
  {path:'thermal/:id',component:TicketComponent},
  {path:'payment',component:PayementPaypalComponent},
  {path:'entreprise',component:IncriEntrepriseComponent},
  {path:'rddv/:id',component:RdvEntrepriseComponent},
  {path:'horaire',component:HoraireEntrepriseComponent},
  {path:'code/:id',component:CodeConfirmationComponent},
  {path:'client',component:InscriptionClientComponent},
  {path:'tv/:id',component:TvComponent},
  {path:'rdv',component:RdvComponent},
  {path:'client/:id',component:ClientLayoutComponent,
    children:[
      {path:'dashbord',loadChildren:()=>import('./views/client_view/dashbord/dashbord.module').then(m=>m.DashbordModule)},
      {path:'profil',loadChildren:()=>import('./views/client_view/profile/profile.module').then(m=>m.ProfileModule)},
      {path:'edit',loadChildren:()=>import('./views/client_view/edit-profile/edit-profile.module').then(m=>m.EditProfileModule)},
      {path:'can',loadChildren:()=>import('./calendrier/calendrier.module').then(m=>m.CalendrierModule)},
      {path:'facture',loadChildren:()=>import('./views/client_view/compte-en-client/compte-en-client.module').then(m=>m.CompteEnClientModule)},
      {path:'facture_details',loadChildren:()=>import('./views/client_view/details-facture/details-facture/details-facture.module').then(m=>m.DetailsFactureModule)}
    ]
  },
  {path:'entreprise/:id',component:EntrepriseLayoutComponent,
    children:[
      {path:'dashbord',loadChildren:()=>import('./views/entreprise_view/compte-entreprise/compte-entreprise/compte-entreprise.module').then(m=>m.CompteEntrepriseModule)},
      {path:'profil',loadChildren:()=>import('./views/entreprise_view/profile-entreprise/profile-entreprise/profile-entreprise.module').then(m=>m.ProfileEntrepriseModule)},
      {path:'facture',loadChildren:()=>import('./views/entreprise_view/compte-en-facture/compte-en-facture/compte-en-facture.module').then(m=>m.CompteEnFactureModule)},
      {path:'edit',loadChildren:()=>import('./views/entreprise_view/edit-profile-entreprise/edit-profile-entreprise/edit-profile-entreprise.module').then(m=>m.EditProfileEntrepriseModule)},
      {path:'facture_details',loadChildren:()=>import('./views/client_view/details-facture/details-facture/details-facture.module').then(m=>m.DetailsFactureModule)},
      {path:'avisEntreprise',loadChildren:()=>import('./views/entreprise_view/avis-entreprise/avis-entreprise/avis-entreprise.module').then(m=>m.AvisEntrepriseModule)},
      {path:'password',loadChildren:()=>import('./views/entreprise_view/modifier-password/modifier-password.module').then(m=>m.ModifierPasswordModule)},
      {path:'accepter',loadChildren:()=>import('./views/entreprise_view/acceptation-rdv/acceptation-rdv.module').then(m=>m.AcceptationRdvModule)},
      {path:'can',loadChildren:()=>import('./calendrer-entreprise/calendrer-entreprise/calendrer-entreprise.module').then(m=>m.CalendrerEntrepriseModule)},
    ]},
  {path:'admin',component:LayoutAdminComponent,
    children:[
      {path:'statistique',loadChildren:()=>import('./views/admin_view/admin/admin/admin.module').then(m=>m.AdminModule)},
      {path:'entreprises',loadChildren:()=>import('./views/admin_view/superadmin/superadmin/superadmin.module').then(m=>m.SuperadminModule)},
      {path:'clients',loadChildren:()=>import('./views/admin_view/superadmin-client/superadmin-client/superadmin-client.module').then(m=>m.SuperadminClientModule)},
      {path:'factures',loadChildren:()=>import('./views/admin_view/ad-fac/ad-fac.module').then(m=>m.AdFacModule)},

    ]
  },
  { path: 'messagelogin',loadChildren:()=>import('./messagerie/login/login.module').then(m=>m.LoginModule)  },
  { path: 'messagerie', loadChildren:()=>import( './messagerie/layout/home/home.module').then(m=>m.HomeModule) },
  {path:'**',component:NotfoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
