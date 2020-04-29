import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifySocialComponent } from './spotify-social.component';

describe('SpotifySocialComponent', () => {
  let component: SpotifySocialComponent;
  let fixture: ComponentFixture<SpotifySocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifySocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifySocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
