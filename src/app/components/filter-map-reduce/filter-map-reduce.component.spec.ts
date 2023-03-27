import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMapReduceComponent } from './filter-map-reduce.component';

describe('FilterMapReduceComponent', () => {
  let component: FilterMapReduceComponent;
  let fixture: ComponentFixture<FilterMapReduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterMapReduceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterMapReduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
