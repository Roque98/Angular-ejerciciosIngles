import { Component, OnInit } from '@angular/core';
import { Jugador } from './../../interface/Jugador'
@Component({
  selector: 'app-tableposition',
  templateUrl: './tableposition.component.html',
  styleUrls: ['./tableposition.component.css']
})
export class TablepositionComponent implements OnInit {

  jugadores: Jugador[] = [
    {
      "nombre": 'Israel',
      "nivel": 10
    },
    {
      "nombre": 'Rufina',
      "nivel": 20
    },
    {
      "nombre": 'Angel',
      "nivel": 2
    }
  ].sort((a, b) => {
    if (a.nivel < b.nivel) {
      return 1;
    }
    if (a.nivel > b.nivel) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  
  constructor() { }

  ngOnInit(): void {
  }

}
