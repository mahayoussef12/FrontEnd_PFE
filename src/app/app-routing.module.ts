import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SearchComponent} from "./search/search.component";
import {CompteClientComponent} from "./compte-client/compte-client.component";
import {ProfileClientComponent} from "./profile-client/profile-client.component";
import {LoginComponent} from "./login/login.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {CompteEntrepriseComponent} from "./compte-entreprise/compte-entreprise.component";
import {ProfileEntrepriseComponent} from "./profile-entreprise/profile-entreprise.component";
import {SearchUserComponent} from "./search-user/search-user.component";
import {ContactComponent} from "./contact/contact.component";
import {SearchCategorieComponent} from "./search-categorie/search-categorie.component";
import {SearchVilleComponent} from "./search-ville/search-ville.component";
import {AvisComponent} from "./avis/avis.component";
import {DetailsEntrepriseInscriComponent} from "./details-entreprise-inscri/details-entreprise-inscri.component";
import {CalendrierComponent} from "./calendrier/calendrier.component";
import {CalendrerEntrepriseComponent} from "./calendrer-entreprise/calendrer-entreprise.component";
import {DetailsFactureComponent} from "./details-facture/details-facture.component";
import {CompteEnFactureComponent} from "./compte-en-facture/compte-en-facture.component";
import {TicketComponent} from "./ticket/ticket.component";
import {EditProfileEntrepriseComponent} from "./edit-profile-entreprise/edit-profile-entreprise.component";
import {EditProfileClientComponent} from "./edit-profile-client/edit-profile-client.component";
import {CompteEnClientComponent} from "./compte-en-client/compte-en-client.component";

import {PayementPaypalComponent} from "./payement-paypal/payement-paypal.component";
import {ChoisirTypeCompteComponent} from "./choisir-type-compte/choisir-type-compte.component";
import {InsripClientComponent} from "./insrip-client/insrip-client.component";
import {AdminComponent} from "./admin/admin.component";
import {SuperadminComponent} from "./superadmin/superadmin.component";
import {SuperadminClientComponent} from "./superadmin-client/superadmin-client.component";

import {IncriEntrepriseComponent} from "./incri-entreprise/incri-entreprise.component";
import {RdvEntrepriseComponent} from "./rdv-entreprise/rdv-entreprise.component";
import {HoraireEntrepriseComponent} from "./horaire-entreprise/horaire-entreprise.component";
import {AvisEntrepriseComponent} from "./avis-entreprise/avis-entreprise.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'compte/:id',component:CompteClientComponent},
  {path:'compte_entreprise/:id',component:CompteEntrepriseComponent},
  {path:'profile/:id',component:ProfileClientComponent},
  {path:'profile_entreprise/:id',component:ProfileEntrepriseComponent},
  {path:'search/:categorie/:ville',component:SearchComponent},
  {path:'login',component:LoginComponent},
  {path:'user-search/:id',component:SearchUserComponent},
  {path:'contact',component:ContactComponent},
  {path:'search_categorie/:categorie',component:SearchCategorieComponent},
  {path:'search_ville/:ville',component:SearchVilleComponent},
  {path:'avis/:id',component:AvisComponent},
  {path:'details/:id',component:DetailsEntrepriseInscriComponent},
  {path:'calendrier/:id',component:CalendrierComponent},
  {path:'calendrier/en/:id',component:CalendrerEntrepriseComponent},
  {path:'facture/:id',component:DetailsFactureComponent},
  {path:'ds/:id',component:CompteEnFactureComponent},
  {path:'All_facture_Client/:id',component:CompteEnClientComponent},
  {path:'thermal/:id',component:TicketComponent},
  {path:'edit/:id',component:EditProfileEntrepriseComponent},
  {path:'edit_client/:id',component:EditProfileClientComponent},
  {path:'payment',component:PayementPaypalComponent},
  {path:'type_espace',component:ChoisirTypeCompteComponent},
  {path:'inscription_client',component:InsripClientComponent},
  {path:'super_admin',component:AdminComponent},
  {path:'super_admin/entreprise',component:SuperadminComponent},
  {path:'super_admin/client',component:SuperadminClientComponent},
  {path:'entreprise',component:IncriEntrepriseComponent},
  {path:'rddv/:id',component:RdvEntrepriseComponent},
  {path:'avis_en/:id',component:AvisEntrepriseComponent},
  {path:'horaire',component:HoraireEntrepriseComponent},
  {path:'**',component:NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
