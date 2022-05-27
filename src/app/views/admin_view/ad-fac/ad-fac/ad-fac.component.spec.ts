import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdFacComponent } from './ad-fac.component';

describe('AdFacComponent', () => {
  let component: AdFacComponent;
  let fixture: ComponentFixture<AdFacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdFacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdFacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
