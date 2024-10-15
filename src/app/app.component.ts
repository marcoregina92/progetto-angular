import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'progetto-angular';

  isVisible = true

  onInput(e: Event) {
    this.title = ((<HTMLInputElement>e.target).value)
  }

  onClick(event: Event) {
    this.title = "Ho cliccato sul button"
  }
}
