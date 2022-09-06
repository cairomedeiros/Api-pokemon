import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { PokeName } from '../models/pokemon.model';

import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  private url: string = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  constructor(private httpClient: HttpClient){}

    public getPokemon():Observable<any>{

        return this.httpClient.get<any>(this.url).pipe(
          tap(res => res),
          tap(res => {
            res.results.map( (resPokemons: any) => {

              this.apiGetPokemons(resPokemons.url).subscribe(
                res => resPokemons.status = res
              )
            })
          })
        );

    }

    public apiGetPokemons(url: string):Observable<any>{
      return this.httpClient.get<any>(url).pipe(
        map(
          res => res
        )
      )
    }

}
