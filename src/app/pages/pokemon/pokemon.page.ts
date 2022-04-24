import { Component, OnInit } from '@angular/core';
import {
  InfiniteScrollCustomEvent,
  IonInfiniteScroll,
  LoadingController,
} from '@ionic/angular';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  pokemon = [];
  offset = 0;

  constructor(
    private pokemonService: PokemonService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.loadPokemon();
  }

  async loadPokemon(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'loading...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.pokemonService.getPokemon(this.offset).subscribe((res) => {
      loading.dismiss();
      this.pokemon.push(...res.results);

      event?.target.complete();
    });
  }

  loadData(event: InfiniteScrollCustomEvent) {
    this.offset += 20;
    this.loadPokemon(event);
  }
}
