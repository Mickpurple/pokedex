import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemon',
    pathMatch: 'full',
  },
  {
    path: 'pokemon',
    loadChildren: () =>
      import('./pages/pokemon/pokemon.module').then((m) => m.PokemonPageModule),
  },
  {
    path: 'pokemon/:id',
    loadChildren: () =>
      import('./pages/pokemon-details/pokemon-details.module').then(
        (m) => m.PokemonDetailsPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
