import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FramworksComponent } from './framworks.component';

describe('FramworksComponent', () => {
  let component: FramworksComponent;
  let fixture: ComponentFixture<FramworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
