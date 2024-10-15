import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent implements OnInit {

  isDisabled = false;
  immagine = ''
  immagine1 = 'https://www.polivet.it/wp-content/uploads/2019/09/Senza-titolo-1-2.jpg'
  immagine2 = 'https://material.angular.io/assets/img/examples/shiba2.jpg';

  constructor() {
    console.log("costruttore")
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }
}
