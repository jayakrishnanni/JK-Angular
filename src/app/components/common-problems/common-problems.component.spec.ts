import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonProblemsComponent } from './common-problems.component';

describe('CommonProblemsComponent', () => {
  let component: CommonProblemsComponent;
  let fixture: ComponentFixture<CommonProblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonProblemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
