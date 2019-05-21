import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatveBusComponent } from './datve-bus.component';

describe('DatveBusComponent', () => {
  let component: DatveBusComponent;
  let fixture: ComponentFixture<DatveBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatveBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatveBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
