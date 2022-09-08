import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

import { map, tap } from 'rxjs/operators';
import { ObsTip } from '../models/observableTipagem';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  private url: string = 'https://pokeapi.co/api/v2/pokemon?limit=10';

  constructor(private httpClient: HttpClient){}

    public getPokemon():Observable<ObsTip>{

        const data = this.httpClient.get<ObsTip>(this.url)

        console.log(data)
        return data;

    }

   

}
