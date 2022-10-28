import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedEducationComponent } from './nested-education.component';

describe('NestedEducationComponent', () => {
  let component: NestedEducationComponent;
  let fixture: ComponentFixture<NestedEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
