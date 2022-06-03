import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceenComponent } from './serviceen.component';

describe('ServiceenComponent', () => {
  let component: ServiceenComponent;
  let fixture: ComponentFixture<ServiceenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
