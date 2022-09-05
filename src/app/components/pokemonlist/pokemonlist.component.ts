import { Component, OnInit } from '@angular/core';
import { PokeName } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.sass']
})
export class PokemonlistComponent implements OnInit {
  pokemon: any = [];
  erro: any;
  dataA: any;
  constructor(private pokemonService: PokemonService) { 
    this.getter();
  }

  ngOnInit(): void {
  }

  getter(){
    this.pokemonService.getPokemon().subscribe(
      (data: PokeName) => {
        this.pokemon = data;

      console.log("data recebido", data);
      console.log("variavel preenchida", this.pokemon);
    }, (error: any) => {
      this.erro = error
    })
  }

}
