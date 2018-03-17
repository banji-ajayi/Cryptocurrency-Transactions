import { Routes } from '@angular/router';

import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CryptocurrListComponent } from './cryptocurr-list/cryptocurr-list.component';
import { RateListComponent } from './rate-list/rate-list.component';
import { CryptocurrDetailComponent } from './cryptocurr-detail/cryptocurr-detail.component';
import { CryptocurrMaintComponent } from './cryptocurr-maint/cryptocurr-maint.component';
import { SettingsComponent } from './settings/settings.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { RateComponent } from './rate/rate.component';
import { GuideComponent } from './guide/guide.component';
import { ContactComponent } from './contact/contact.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { FaqComponent } from './faq/faq.component';
import { SignInComponent } from '../fw/users/sign-in/sign-in.component';
import { RegisterUserComponent } from '../fw/users/register-user/register-user.component';
import { AuthGuard } from './services/auth-guard.service';

export const appRoutes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'authenticated', component: AuthenticatedUserComponent, canActivate: [AuthGuard],
    children: [
      { path: '', canActivateChild: [AuthGuard],
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'cryptocurr-list/:count', component: CryptocurrListComponent },
          { path: 'rate-list/:count', component: RateListComponent },
          { path: 'cryptocurr-detail/:id/:operation', component: CryptocurrDetailComponent },
          { path: 'cryptocurr-maint', component: CryptocurrMaintComponent },
          { path: 'settings', component: SettingsComponent },
          { path: 'buy', component: BuyComponent },
          { path: 'sell', component: SellComponent },
          { path: 'rate', component: RateComponent },
          { path: 'guide', component: GuideComponent },
          { path: 'contact', component: ContactComponent },
          { path: 'advertise', component: AdvertiseComponent },
          { path: 'faq', component: FaqComponent }
        ] }
    ] },
  { path: '', component: SignInComponent },
  { path: '**', component: SignInComponent }
];
