import { Component, inject } from '@angular/core';
import { VideogameComponent } from './videogame/videogame.component';
import { Videogame } from '../videogame.model';
import { VideogamesService } from '../videogames.service';



@Component({
  selector: 'app-videogames',
  standalone: true,
  imports: [VideogameComponent],
  templateUrl: './videogames.component.html',
  styleUrl: './videogames.component.css'
})
export class VideogamesComponent {

  // definizione di una proprietà per contenere un array di oggetti Videogame
  videogames: Videogame []= [];

  // iniezione del servizio VideogamesService
  private videogamesService = inject(VideogamesService)


  constructor(){
  }

  // metodo getter per ottenere la lista di tutti i videogiochi dal servizio
  get allVideoGames(){
    return this.videogamesService.getVideogames(); //chiama il metodo getVideogames() dal servizio
  }



}
