import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneUtilityComponent } from './zone-utility.component';

describe('ZoneUtilityComponent', () => {
  let component: ZoneUtilityComponent;
  let fixture: ComponentFixture<ZoneUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneUtilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
