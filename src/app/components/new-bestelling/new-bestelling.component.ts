import { Component, OnInit } from '@angular/core';
import {BestellingService} from '../../services/bestelling.service';
import {Fiets} from '../../models/Fiets';
import {Bestelling} from '../../models/Bestelling';

@Component({
  selector: 'app-new-bestelling',
  templateUrl: './new-bestelling.component.html',
  styleUrls: ['./new-bestelling.component.scss']
})
export class NewBestellingComponent implements OnInit {
bestelling: Bestelling;
fietsen: Fiets[];

  constructor(private bestellingService: BestellingService) { }

  ngOnInit(): void {
this.loadAllFietsen();
console.log(this.fietsen);
  }

  loadAllFietsen(): void {
    this.bestellingService.loadAllFietsen().subscribe((fietsen) => (this.fietsen = fietsen));
  }

  plaatsBestelling(): void {
    this.bestellingService.createBestelling(this.bestelling).subscribe();
  }
}
