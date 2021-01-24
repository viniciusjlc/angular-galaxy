import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemAtributosComponent } from './personagem-atributos.component';

describe('PersonagemAtributosComponent', () => {
  let component: PersonagemAtributosComponent;
  let fixture: ComponentFixture<PersonagemAtributosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonagemAtributosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagemAtributosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
