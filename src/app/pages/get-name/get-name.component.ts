import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-get-name',
  templateUrl: './get-name.component.html',
  styleUrls: ['./get-name.component.css']
})
export class GetNameComponent implements OnInit {
  error=false
  nombre = ''

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  presionarBoton(){
    this.error = false;
    if(this.nombre.length < 5) {
      this.error = true;
    } else {
      this.router.navigateByUrl('juego')
    }
    
  }
}
