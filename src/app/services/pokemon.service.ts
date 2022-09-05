import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PokeName } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  constructor(private httpClient: HttpClient){}

    public getPokemon():Observable<any>{

        return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon?limit=151`);

    }

}
