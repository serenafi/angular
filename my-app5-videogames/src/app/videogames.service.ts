import { Injectable } from '@angular/core';
import { Prenotazione, Videogame } from './videogame.model';
import { LISTA_VIDEOGAMES } from './listaVideogames';



@Injectable({
  providedIn: 'root'
})
export class VideogamesService {

  // array contenente la lista di videogiochi
  listaVideogames: Videogame[] = LISTA_VIDEOGAMES;

  // metodo per ottenere tutti i videogiochi
  getVideogames(){
    return this.listaVideogames;
  }

  // videogames = LISTA_VIDEOGAMES;

  constructor() {
    //carica eventuali prenotazioni salvate in localStorage all'inizializzazione del servizio
    const listaPrenotazioni = localStorage.getItem("listaPrenotazioni");
    if(listaPrenotazioni){
      this.listaPrenotazioni = JSON.parse(listaPrenotazioni);
    }
   }

    // array contenente la lista delle prenotazioni
   listaPrenotazioni: Prenotazione[] = [];

  //metodo private per salvare la lista di prenotazioni nel localStorage
  private savePrenotazione(){
    localStorage.setItem('listaPrenotazioni', JSON.stringify(this.listaPrenotazioni))
   }
  
   // metodo per ottenere l'ID del videogioco associato a una prenotazione
   getVideogameIdPrenotazione(videogameId: string): string | null {
    // trova una prenotazione basata sull'ID del videogioco
    const prenotazione = this.listaPrenotazioni.find(
      (p) => p.videogameId === videogameId
    );
     // return dell'ID del videogioco se la prenotazione è trovata, altrimenti null
    return prenotazione ? prenotazione.videogameId : null;
  }


   // metodo per aggiungere una nuova prenotazione
  addPrenotazione(prenotazione: Prenotazione){
    // aggiunge una nuova prenotazione all'array delle prenotazioni
    this.listaPrenotazioni.push({
      videogameId: prenotazione.videogameId,
      nome: prenotazione.nome,
      cognome: prenotazione.cognome,
      email: prenotazione.email,
      telefono: prenotazione.telefono,
      indirizzo: prenotazione.indirizzo,
    });
     // salva la lista aggiornata di prenotazioni nel localStorage
    this.savePrenotazione();

    // stampa la lista delle prenotazioni nella console
    console.log(this.listaPrenotazioni);
  }



}
