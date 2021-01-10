import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBestellingComponent } from './new-bestelling.component';

describe('NewBestellingComponent', () => {
  let component: NewBestellingComponent;
  let fixture: ComponentFixture<NewBestellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBestellingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBestellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
