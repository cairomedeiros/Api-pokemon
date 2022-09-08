import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { PokeName } from '../models/pokemon.model';

import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  private url: string = 'https://pokeapi.co/api/v2/pokemon?limit=10';

  constructor(private httpClient: HttpClient){}

    public getPokemon():Observable<any>{

        const data = this.httpClient.get<any>(this.url)

        console.log(data)
        return data;

    }

   

}
