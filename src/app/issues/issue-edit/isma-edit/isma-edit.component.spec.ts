import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsmaEditComponent } from './isma-edit.component';

describe('IsmaEditComponent', () => {
  let component: IsmaEditComponent;
  let fixture: ComponentFixture<IsmaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsmaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsmaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
