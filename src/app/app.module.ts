import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BestellingenComponent } from './components/bestellingen/bestellingen.component';
import {HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import { KlantComponent } from './components/klant/klant.component';
import { NewBestellingComponent } from './components/new-bestelling/new-bestelling.component';

@NgModule({
  declarations: [
    AppComponent,
    BestellingenComponent,
    KlantComponent,
    NewBestellingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
