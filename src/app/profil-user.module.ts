import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilUserComponent } from './profil-client/profil-user/profil-user.component';
import { InfoPersoComponent } from './profil-client/info-perso/info-perso.component';
import { MyOrdersComponent } from './profil-client/my-orders/my-orders.component';
import { MyPaymentComponent } from './profil-client/my-payment/my-payment.component';
import { ProfilDashboardComponent } from './profil-client/profil-dashboard/profil-dashboard.component';
import { ProfilDetailsOrdersComponent } from './profil-client/profil-details-orders/profil-details-orders.component';

const routes: Routes = [
    {
        path: '',
        component: ProfilUserComponent,
        children: [
            { path: '', component:ProfilDashboardComponent },
            { path: 'info_perso', component: InfoPersoComponent },
            { path: 'my_paiement', component: MyPaymentComponent },
            { path: 'my-orders', component: MyOrdersComponent },
            { path: 'my-orders/details-orders', component: ProfilDetailsOrdersComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [
        MyPaymentComponent,
        ProfilDashboardComponent,
        ProfilDetailsOrdersComponent,
    ]
})
export class ProfilUserModule { }
