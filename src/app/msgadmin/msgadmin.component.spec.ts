import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgadminComponent } from './msgadmin.component';

describe('MsgadminComponent', () => {
  let component: MsgadminComponent;
  let fixture: ComponentFixture<MsgadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
