import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideogamesComponent } from "./videogames/videogames.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VideogamesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app5-videogames';
}
