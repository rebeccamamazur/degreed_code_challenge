import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecadeToggleComponent } from './decade-toggle.component';

describe('DecadeToggleComponent', () => {
  let component: DecadeToggleComponent;
  let fixture: ComponentFixture<DecadeToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecadeToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecadeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
