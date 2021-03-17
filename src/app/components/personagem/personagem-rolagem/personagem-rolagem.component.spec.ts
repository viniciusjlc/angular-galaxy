import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemRolagemComponent } from './personagem-rolagem.component';

describe('PersonagemRolagemComponent', () => {
  let component: PersonagemRolagemComponent;
  let fixture: ComponentFixture<PersonagemRolagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonagemRolagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagemRolagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
