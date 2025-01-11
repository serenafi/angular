export interface Videogame  {
  id: string,
  titolo: string,
  descrizione: string,
  genere: string,
  dataRilascio: string,
  prezzo: number,
  disponibilita: boolean,
  img:string
}

export interface Prenotazione {
  videogameId: string;
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  indirizzo: string;
}