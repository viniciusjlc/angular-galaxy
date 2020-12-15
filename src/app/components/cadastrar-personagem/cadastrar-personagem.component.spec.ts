import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPersonagemComponent } from './cadastrar-personagem.component';

describe('CadastrarPersonagemComponent', () => {
  let component: CadastrarPersonagemComponent;
  let fixture: ComponentFixture<CadastrarPersonagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarPersonagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPersonagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
