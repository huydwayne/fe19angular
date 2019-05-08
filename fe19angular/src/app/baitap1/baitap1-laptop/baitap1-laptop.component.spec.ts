import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap1LaptopComponent } from './baitap1-laptop.component';

describe('Baitap1LaptopComponent', () => {
  let component: Baitap1LaptopComponent;
  let fixture: ComponentFixture<Baitap1LaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap1LaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap1LaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
