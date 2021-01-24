import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemStatusComponent } from './personagem-status.component';

describe('PersonagemStatusComponent', () => {
  let component: PersonagemStatusComponent;
  let fixture: ComponentFixture<PersonagemStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonagemStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagemStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
