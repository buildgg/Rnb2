import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RnbTableComponent } from './rnb-table.component';

describe('RnbTableComponent', () => {
  let component: RnbTableComponent;
  let fixture: ComponentFixture<RnbTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RnbTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RnbTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
