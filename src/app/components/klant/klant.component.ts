import { Component, OnInit } from '@angular/core';
import {KlantService} from '../../services/klant.service';
import {ActivatedRoute} from '@angular/router';
import {Klant} from '../../models/Klant';

@Component({
  selector: 'app-klant',
  templateUrl: './klant.component.html',
  styleUrls: ['./klant.component.scss']
})
export class KlantComponent implements OnInit {
klantnummer: string;
klant: Klant;

  constructor(private klantService: KlantService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.klantnummer = this.route.snapshot.params['klantnummer'];
    this.loadKlant(this.klantnummer);
  }

  loadKlant(klantnummer: string): void {
    this.klantService.getKlantByKlantnummer(klantnummer).subscribe((klant) => (this.klant = klant));
  }

}
