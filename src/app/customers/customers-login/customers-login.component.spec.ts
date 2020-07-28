import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersLoginComponent } from './customers-login.component';

describe('CustomersLoginComponent', () => {
  let component: CustomersLoginComponent;
  let fixture: ComponentFixture<CustomersLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
