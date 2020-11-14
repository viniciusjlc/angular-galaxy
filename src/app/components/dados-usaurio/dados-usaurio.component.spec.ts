import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosUsaurioComponent } from './dados-usaurio.component';

describe('DadosUsaurioComponent', () => {
  let component: DadosUsaurioComponent;
  let fixture: ComponentFixture<DadosUsaurioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosUsaurioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosUsaurioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
