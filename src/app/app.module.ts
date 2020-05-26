import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
