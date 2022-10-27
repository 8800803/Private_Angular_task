import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSelectionsComponent } from './custom-selections.component';

describe('CustomSelectionsComponent', () => {
  let component: CustomSelectionsComponent;
  let fixture: ComponentFixture<CustomSelectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSelectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSelectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
