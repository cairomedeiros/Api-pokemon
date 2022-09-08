import { Component, OnInit } from '@angular/core';

import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.sass']
})
export class PokemonlistComponent implements OnInit {
public getallpokemons: any;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe(
      res => {
        this.getallpokemons = res.results;
        console.log(this.getallpokemons)
      }
    );
  }

 

}
