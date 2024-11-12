import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'progetto-angular';

  persone = [
    { nome: "Luca", cognome: "Rossi", isOnline: true },
    { nome: "Marco", cognome: "Verdi", isOnline: true },
    { nome: "Anna", cognome: "Neri", isOnline: false },
    { nome: "Elena", cognome: "Luce", isOnline: true }
  ]
}



