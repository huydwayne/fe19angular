import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap1SlideComponent } from './baitap1-slide.component';

describe('Baitap1SlideComponent', () => {
  let component: Baitap1SlideComponent;
  let fixture: ComponentFixture<Baitap1SlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap1SlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap1SlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
