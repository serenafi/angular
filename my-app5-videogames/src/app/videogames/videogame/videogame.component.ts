import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Videogame } from '../../videogame.model';
import { VideogamesService } from '../../videogames.service';
import { FormsModule, NgForm } from '@angular/forms';  // modulo per la gestione dei form
import { DatePipe } from '@angular/common'; // pipe per la gestione delle date

@Component({
  selector: 'app-videogame',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './videogame.component.html',
  styleUrl: './videogame.component.css',
})
export class VideogameComponent {
  // Input per ricevere i videogame dal componente genitore
  @Input({ required: true }) videogame!: Videogame;
  // iniezione del servizio VideogamesService
  private videogamesService = inject(VideogamesService);
  // variabili per memorizzare i dati inseriti nel form
  enteredNome!: string;
  enteredCognome!: string;
  enteredEmail!: string;
  enteredTelefono!: string;
  enteredIndirizzo!: string;

  // Output per emettere eventi al componente genitore
  @Output() close = new EventEmitter<void>();
  //flag per gestire la visibilità della sezione di prenotazione
  isAddingPrenotazione: boolean = false;

  onStartAddPrenotazione() {
    this.isAddingPrenotazione = true;
  }

  onCancelAddPrenotazione() {
    this.isAddingPrenotazione = false;
  }

  //gestisce la chiusura della sezione di prenotazione
  onClose() {
    this.onCancelAddPrenotazione();
  }

  // Invia i dati della prenotazione al servizio
  onSubmit(videogameId: string) {
    this.videogamesService.addPrenotazione({
      videogameId: videogameId,
      nome: this.enteredNome,
      cognome: this.enteredCognome,
      email: this.enteredEmail,
      telefono: this.enteredTelefono,
      indirizzo: this.enteredIndirizzo,
    });
    this.onClose();
  }

  // Valida e gestisce l'invio del form utilizzando NgForm
  onSubmitForm(formData: NgForm) {
    if (formData.form.valid) {
      console.log('Form valido. Dati inviati:', formData.form.value);
    } else {
      console.log('Form non valido');
    }
  }

  // controlla se un videogioco è già prenotato
  isPrenotato(videogameId: string) {
    return this.videogamesService.getVideogameIdPrenotazione(videogameId);
  }
  // mostra un messaggio di conferma per una prenotazione già esistente
  confermaPrenotazione() {
    alert('Hai già prenotato questo gioco!');
  }
  // mostra un messaggio di conferma per un gioco disponibile per l'acquisto
  confermaAcquisto() {
    alert('Il gioco è disponibile per essere acquistato!');
  }
}
