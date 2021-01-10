import { Component, OnInit } from '@angular/core';
import {BestellingService} from '../../services/bestelling.service';
import {Bestelling} from '../../models/Bestelling';

@Component({
  selector: 'app-bestellingen',
  templateUrl: './bestellingen.component.html',
  styleUrls: ['./bestellingen.component.scss']
})
export class BestellingenComponent implements OnInit {
bestellingen: Bestelling[];
input: string;

  constructor(private bestellingService: BestellingService) { }

  ngOnInit(): void {
    this.loadBestellingen();
  }

  private loadBestellingen(): void {
    this.bestellingService.loadAllBestellingen().subscribe((bestellingen) => (this.bestellingen = bestellingen));
  }

  private filterByEmail(email: string): void {
     this.bestellingService.filterByEmail(email).subscribe((bestellingen) => (this.bestellingen = bestellingen));
  }

  filterEmail(): void {
    this.filterByEmail(this.input);
  }

  private deleteBestelling(leverancierBonNummer: string): void {
    this.bestellingService.deleteBestelling(leverancierBonNummer).subscribe();
  }

}
