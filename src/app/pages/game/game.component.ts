import { Component, OnInit, ViewChild } from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';
import GeneratorLeters from '../../data/leters'
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  // get the component instance to have access to plyr instance
  @ViewChild(PlyrComponent)
  plyr: PlyrComponent;
 
  // or get it from plyrInit event
  player: Plyr;
  audioSources: Plyr.Source[] = [
    {
      src: 'assets/music/a.mp3',
      type: 'audio/mp3'
    }
  ];

  optionsPlayer: Plyr.Options = {
    controls: [
      'play-large',
      //'play',
      'progress',
      'current-time',
      'mute',
      'volume',
      'captions',
      //'settings',
      'pip',
      'airplay',
      'fullscreen'
    ]
  };
  
  // Logica del juego
  nivel = 1;
  velocidad = .8;
  intentosDisponibles = 3;
  letra = GeneratorLeters.getLowerCase();
  puntosTotales = 0

  // Input
  respuesta = ''

  // Interfaz
  respondio = false
  correcto = false

  ngOnInit(): void {
    this.cambiarSource();
  }

  played(event: Plyr.PlyrEvent) {
    this.player.speed = this.velocidad;
    
    console.log('played', event);
  }

  play() {
    if(this.intentosDisponibles > 0){
      this.player.play();
      this.intentosDisponibles--;
    } else {
      alert('Ya no hay repeticiones disponibles')
    }

  }
  
  cambiarSource(){
    this.letra = GeneratorLeters.getLowerCase();
    this.audioSources = [
      {
        src: `assets/music/${this.letra}.mp3`,
        type: 'audio/mp3'
      }
    ];
  }
  
  avanzarNivel(){
    this.velocidad += .2
    this.puntosTotales +=  this.intentosDisponibles +1
    this.intentosDisponibles = 3
    this.respuesta = ''
    // Interfaz
    this.respondio = false
    this.correcto = false
    this.player.speed = this.velocidad;
    this.nivel++;
  }

  verificarRespuesta(){
    this.respondio = true
    if(this.respuesta == this.letra){
      this.correcto = true;
      this.avanzarNivel();
      this.cambiarSource();

    } else {
      this.correcto = false;
    }
  }

  reiniciarJuego(){
    this.cambiarSource();

    this.nivel = 1;
    this.velocidad = .8;
    this.intentosDisponibles = 3;
    this.puntosTotales = 0

    // Input
    this.respuesta = ''

    // Interfaz
    this.respondio = false
    this.correcto = false
  }
}
