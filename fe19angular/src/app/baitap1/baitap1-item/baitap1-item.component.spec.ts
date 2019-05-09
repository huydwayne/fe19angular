import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap1ItemComponent } from './baitap1-item.component';

describe('Baitap1ItemComponent', () => {
  let component: Baitap1ItemComponent;
  let fixture: ComponentFixture<Baitap1ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap1ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap1ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
