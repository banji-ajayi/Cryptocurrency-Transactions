import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FwModule } from '../fw/fw.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { appRoutes } from './app.routing';
import { CryptocurrDetailComponent } from './cryptocurr-detail/cryptocurr-detail.component';
import { CryptocurrListComponent } from './cryptocurr-list/cryptocurr-list.component';
import { CryptocurrMaintComponent } from './cryptocurr-maint/cryptocurr-maint.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { UserService } from './services/user.service';
import { UserApi } from '../fw/users/user-api';
import { AuthGuard } from './services/auth-guard.service';
import { AppDataService } from './services/app-data.service';
import { CryptocurrPanelComponent } from './panels/cryptocurr-panel/cryptocurr-panel.component';
import { ImagePanelComponent } from './panels/image-panel/image-panel.component';
import { NewsPanelComponent } from './panels/news-panel/news-panel.component';
import { TestifyPanelComponent } from './panels/testify-panel/testify-panel.component';
import { RatePanelComponent } from './panels/rate-panel/rate-panel.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { RateComponent } from './rate/rate.component';
import { GuideComponent } from './guide/guide.component';
import { ContactComponent } from './contact/contact.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { FaqComponent } from './faq/faq.component';
import { RateListComponent } from './rate-list/rate-list.component';
import { TransactionsComponent } from './transactions/transactions.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    CryptocurrDetailComponent,
    CryptocurrListComponent,
    CryptocurrMaintComponent,
    AuthenticatedUserComponent,
    CryptocurrPanelComponent,
    ImagePanelComponent,
    NewsPanelComponent,
    RatePanelComponent,
    TestifyPanelComponent,
    BuyComponent,
    SellComponent,
    RateComponent,
    GuideComponent,
    ContactComponent,
    AdvertiseComponent,
    FaqComponent,
    RateListComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    { provide: UserApi, useExisting: UserService },
    AuthGuard,
    AppDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
