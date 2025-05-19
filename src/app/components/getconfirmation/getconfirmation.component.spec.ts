import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetconfirmationComponent } from './getconfirmation.component';

describe('GetconfirmationComponent', () => {
  let component: GetconfirmationComponent;
  let fixture: ComponentFixture<GetconfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetconfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
