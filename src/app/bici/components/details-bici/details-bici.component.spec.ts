import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBiciComponent } from './details-bici.component';

describe('DetailsBiciComponent', () => {
  let component: DetailsBiciComponent;
  let fixture: ComponentFixture<DetailsBiciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsBiciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsBiciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
