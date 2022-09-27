import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePokeComponent } from './components/home-poke/home-poke.component';
import { PokemonlistComponent } from './components/pokemonlist/pokemonlist.component';

const routes: Routes = [
  {path: 'home', component: HomePokeComponent},
  {path: 'list', component: PokemonlistComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
