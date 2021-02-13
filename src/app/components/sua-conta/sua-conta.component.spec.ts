import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaContaComponent } from './sua-conta.component';

describe('SuaContaComponent', () => {
  let component: SuaContaComponent;
  let fixture: ComponentFixture<SuaContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
