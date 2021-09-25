import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBicisComponent } from './list-bicis.component';

describe('ListBicisComponent', () => {
  let component: ListBicisComponent;
  let fixture: ComponentFixture<ListBicisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBicisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBicisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
