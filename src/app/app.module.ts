import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SliderServicesComponent } from './home/slider-services/slider-services.component';
import { SliderGoogleReviewComponent } from './home/slider-google-review/slider-google-review.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ValuesEngagementsComponent } from './about-us/values-engagements/values-engagements.component';
import { CoverAboutComponent } from './about-us/cover-about/cover-about.component';
import { SliderValueComponent } from './about-us/slider-value/slider-value.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ServicesPricesComponent } from './services-prices/services-prices.component';
import { ModalLoginFormComponent } from './modal-login-form/modal-login-form.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AuthInterceptor } from './modal-login-form/authentification/auth.interceptor';
import { ListPriceComponent } from './services-prices/list-price/list-price.component';
import { CommonModule } from '@angular/common';
import { SimulateurPriceComponent } from './services-prices/simulateur-price/simulateur-price.component';
import { FAQComponent } from './contenu footer/faq/faq.component';
import { CGVComponent } from './contenu footer/cgv/cgv.component';
import { MentionLegaleComponent } from './contenu footer/mention-legale/mention-legale.component';
import { OrderComponent } from './process-order/order/order.component';
import { ProfilUserComponent } from './profil-client/profil-user/profil-user.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { InfoPersoComponent } from './profil-client/info-perso/info-perso.component';
import { MyOrdersComponent } from './profil-client/my-orders/my-orders.component';
import { SliderServicesV2Component } from './slider-services-v2/slider-services-v2.component';
import { PanierComponent } from './panier/panier.component';
import { OrderSelectDateComponent } from './process-order/order-select-date/order-select-date.component';
import { OrderCoordonneesComponent } from './process-order/order-coordonnees/order-coordonnees.component';
import { OrderPaiementComponent } from './process-order/order-paiement/order-paiement.component';
import { OrderPaiementTksComponent } from './process-order/order-paiement-tks/order-paiement-tks.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderPanierRecapComponent } from './order-panier-recap/order-panier-recap.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SliderServicesComponent,
    SliderGoogleReviewComponent,
    AboutUsComponent,
    ValuesEngagementsComponent,
    CoverAboutComponent,
    SliderValueComponent,
    ContactFormComponent,
    ServicesPricesComponent,
    ModalLoginFormComponent,
    RegisterPageComponent,
    ListPriceComponent,
    SimulateurPriceComponent,
    FAQComponent,
    CGVComponent,
    MentionLegaleComponent,
    OrderComponent,
    ProfilUserComponent,
    SidebarAdminComponent,
    InfoPersoComponent,
    MyOrdersComponent,
    SliderServicesV2Component,
    PanierComponent,
    OrderSelectDateComponent,
    OrderCoordonneesComponent,
    OrderPaiementComponent,
    OrderPaiementTksComponent,
    OrderFormComponent,
    OrderPanierRecapComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  providers: [
    {provide :LOCALE_ID, useValue:'fr-FR'},
    AuthInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
