import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonFavsPage } from './pokemon-favs.page';

describe('PokemonFavsPage', () => {
  let component: PokemonFavsPage;
  let fixture: ComponentFixture<PokemonFavsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFavsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
