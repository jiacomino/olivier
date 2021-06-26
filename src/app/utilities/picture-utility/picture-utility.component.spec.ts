import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureUtilityComponent } from './picture-utility.component';

describe('PictureUtilityComponent', () => {
  let component: PictureUtilityComponent;
  let fixture: ComponentFixture<PictureUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureUtilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
