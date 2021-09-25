import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBiciComponent } from './update-bici.component';

describe('UpdateBiciComponent', () => {
  let component: UpdateBiciComponent;
  let fixture: ComponentFixture<UpdateBiciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBiciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBiciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
