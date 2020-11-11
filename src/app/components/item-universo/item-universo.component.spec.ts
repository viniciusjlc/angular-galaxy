import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemUniversoComponent } from './item-universo.component';

describe('ItemUniversoComponent', () => {
  let component: ItemUniversoComponent;
  let fixture: ComponentFixture<ItemUniversoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemUniversoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemUniversoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
