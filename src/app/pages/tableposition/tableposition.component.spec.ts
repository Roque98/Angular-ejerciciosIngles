import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablepositionComponent } from './tableposition.component';

describe('TablepositionComponent', () => {
  let component: TablepositionComponent;
  let fixture: ComponentFixture<TablepositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablepositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablepositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
