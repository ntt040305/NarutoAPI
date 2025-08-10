import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterFocusComponent } from './character-focus.component';

describe('CharacterFocusComponent', () => {
  let component: CharacterFocusComponent;
  let fixture: ComponentFixture<CharacterFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterFocusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
