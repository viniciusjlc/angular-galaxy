import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemHabilidadesComponent } from './personagem-habilidades.component';

describe('PersonagemHabilidadesComponent', () => {
  let component: PersonagemHabilidadesComponent;
  let fixture: ComponentFixture<PersonagemHabilidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonagemHabilidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagemHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
