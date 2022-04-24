import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnInit {
  pokemon: object = null;
  image: string = null;
  type: string = null;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemonDetail(id).subscribe((res) => {
      this.pokemon = res;
      this.image = res.sprites.front_default;

      switch (res.types[0].type.name) {
        case 'normal':
          this.type = 'white';
          break;
        case 'steel':
          this.type = 'white';
          break;
        case 'ice':
          this.type = 'white';
          break;
        case 'electric':
          this.type = 'red';
          break;
        case 'fighting':
          this.type = 'red';
          break;
        case 'psychic':
          this.type = 'red';
          break;
        case 'fairy':
          this.type = 'red';
          break;
        case 'poison':
          this.type = 'red';
          break;
        case 'flying':
          this.type = 'blue';
          break;
        case 'dragon':
          this.type = 'blue';
          break;
        case 'ghost':
          this.type = 'blue';
          break;
        case 'dark':
          this.type = 'brown';
          break;
        case 'rock':
          this.type = 'brown';
          break;
        case 'bug':
          this.type = 'green';
          break;
        case 'fire':
          this.type = 'red';
          break;
        case 'water':
          this.type = 'blue';
          break;
        case 'ground':
          this.type = 'brown';
          break;
        case 'grass':
          this.type = 'green';
          break;
        default:
          this.type = 'white';
      }
      console.log(this.type);
    });
  }
}
