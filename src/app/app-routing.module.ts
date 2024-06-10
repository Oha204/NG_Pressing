import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ValuesEngagementsComponent } from './about-us/values-engagements/values-engagements.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ServicesPricesComponent } from './services-prices/services-prices.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ModalLoginFormComponent } from './modal-login-form/modal-login-form.component';
import { FAQComponent } from './contenu footer/faq/faq.component';
import { CGVComponent } from './contenu footer/cgv/cgv.component';
import { MentionLegaleComponent } from './contenu footer/mention-legale/mention-legale.component';
import { OrderComponent } from './process-order/order/order.component';
import { ProfilUserComponent } from './profil-client/profil-user/profil-user.component';
import { PanierComponent } from './panier/panier.component';
import { OrderSelectDateComponent } from './process-order/order-select-date/order-select-date.component';
import { OrderCoordonneesComponent } from './process-order/order-coordonnees/order-coordonnees.component';
import { OrderPaiementComponent } from './process-order/order-paiement/order-paiement.component';
import { OrderPaiementTksComponent } from './process-order/order-paiement-tks/order-paiement-tks.component';
import { authGuard } from './modal-login-form/authentification/auth.guard';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"about_us", component:AboutUsComponent},
  {path:"about_us_values_engagements", component:ValuesEngagementsComponent},
  {path:"contact", component:ContactFormComponent},
  {path:"services", component:ServicesPricesComponent},
  {path:"inscription", component:RegisterPageComponent},
  {path:"modal_login", component:ModalLoginFormComponent},
  {path:"FAQ", component:FAQComponent},
  {path:"CGV", component:CGVComponent},
  {path:"order", component:OrderComponent, canActivate: [authGuard]},
  {path:"Mention_Legale", component:MentionLegaleComponent},
  {path:"panier", component:PanierComponent},
  // Processus de commande
  {path:"order_selectDate", component:OrderSelectDateComponent},
  {path:"order_coordonnees", component:OrderCoordonneesComponent},
  {path:"order_paiement", component:OrderPaiementComponent},
  {path:"order_paiement_tks", component:OrderPaiementTksComponent},
  // Router Profil USER
  {path:"profil_user", loadChildren: () => import('./profil-user.module').then(m => m.ProfilUserModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  exports: [RouterModule],
  declarations: [
  ]
})
export class AppRoutingModule { }
