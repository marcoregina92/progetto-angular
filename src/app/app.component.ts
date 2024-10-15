import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'progetto-angular';

  onInput(e: Event) {
    console.log((<HTMLInputElement>e.target).value)
  }
}
