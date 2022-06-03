import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFactureEntrepriseComponent } from './details-facture-entreprise.component';

describe('DetailsFactureEntrepriseComponent', () => {
  let component: DetailsFactureEntrepriseComponent;
  let fixture: ComponentFixture<DetailsFactureEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsFactureEntrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFactureEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
