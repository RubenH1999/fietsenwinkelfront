import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BestellingenComponent} from './components/bestellingen/bestellingen.component';
import {KlantComponent} from './components/klant/klant.component';
import {NewBestellingComponent} from './components/new-bestelling/new-bestelling.component';

const routes: Routes = [
  {path: '', component: BestellingenComponent},
  {path: 'klant/:klantnummer', component: KlantComponent},
  {path: 'bestelling', component: NewBestellingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
