import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBiciComponent } from './new-bici.component';

describe('NewBiciComponent', () => {
  let component: NewBiciComponent;
  let fixture: ComponentFixture<NewBiciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBiciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBiciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
