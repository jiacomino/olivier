import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceSoldUtiltyComponent } from './price-sold-utilty.component';

describe('PriceSoldUtiltyComponent', () => {
  let component: PriceSoldUtiltyComponent;
  let fixture: ComponentFixture<PriceSoldUtiltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceSoldUtiltyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceSoldUtiltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
