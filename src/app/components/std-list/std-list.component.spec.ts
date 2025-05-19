import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdListComponent } from './std-list.component';

describe('StdListComponent', () => {
  let component: StdListComponent;
  let fixture: ComponentFixture<StdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
