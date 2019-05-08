import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap1SmartphoneComponent } from './baitap1-smartphone.component';

describe('Baitap1SmartphoneComponent', () => {
  let component: Baitap1SmartphoneComponent;
  let fixture: ComponentFixture<Baitap1SmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap1SmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap1SmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
