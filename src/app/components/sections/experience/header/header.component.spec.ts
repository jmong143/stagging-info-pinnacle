import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExHeaderComponent } from './header.component';

describe('ExHeaderComponent', () => {
  let component: ExHeaderComponent;
  let fixture: ComponentFixture<ExHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
