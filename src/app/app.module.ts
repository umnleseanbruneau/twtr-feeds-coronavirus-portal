import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* use LocationStrategy and HashLocationStrategy if deployed to web server */
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { StateComponent } from './components/state/state.component';
import { OrgComponent } from './components/org/org.component';
import { ScientistComponent } from './components/scientist/scientist.component';
import { MediaComponent } from './components/media/media.component';
import { CompanyComponent } from './components/company/company.component';
import { PeopleComponent } from './components/people/people.component';
import { LinksComponent } from './components/links/links.component';
import { AboutComponent } from './components/about/about.component';
import { TwtrFeedsService } from './services/twtr-feeds.service';
import { ExtLinksService } from './services/ext-links.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotfoundComponent,
    StateComponent,
    OrgComponent,
    ScientistComponent,
    MediaComponent,
    CompanyComponent,
    PeopleComponent,
    LinksComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TwtrFeedsService,
    ExtLinksService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
