import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';
import { PokemonlistComponent } from './components/pokemonlist/pokemonlist.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePokeComponent } from './components/home-poke/home-poke.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonlistComponent,
    HomePokeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
