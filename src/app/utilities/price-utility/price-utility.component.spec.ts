import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceUtilityComponent } from './price-utility.component';

describe('PriceUtilityComponent', () => {
  let component: PriceUtilityComponent;
  let fixture: ComponentFixture<PriceUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceUtilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
