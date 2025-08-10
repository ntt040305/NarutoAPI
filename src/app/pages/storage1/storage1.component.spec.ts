import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Storage1Component } from './storage1.component';

describe('Storage1Component', () => {
  let component: Storage1Component;
  let fixture: ComponentFixture<Storage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Storage1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Storage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
