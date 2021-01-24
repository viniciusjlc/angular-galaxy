import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemDadosBaseComponent } from './personagem-dados-base.component';

describe('PersonagemDadosBaseComponent', () => {
  let component: PersonagemDadosBaseComponent;
  let fixture: ComponentFixture<PersonagemDadosBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonagemDadosBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagemDadosBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
