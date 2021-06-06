import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaPaginationComponent } from './alpha-pagination.component';

describe('AlphaPaginationComponent', () => {
  let component: AlphaPaginationComponent;
  let fixture: ComponentFixture<AlphaPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphaPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
