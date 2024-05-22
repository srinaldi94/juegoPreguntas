import { Component } from '@angular/core';
import { Pregunta } from '../../models/pregunta';
import { PreguntaService } from '../../services/pregunta.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-respuesta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './respuesta.component.html',
  styleUrl: './respuesta.component.css'
})
export class RespuestaComponent {

  listPreguntas: Pregunta[] = [];
  respuestasUsuario: any[] = [];

  constructor(private _preguntaService: PreguntaService, private router: Router){}

  ngOnInit(){
    this.listPreguntas = this._preguntaService.preguntas;
    this.respuestasUsuario = this._preguntaService.respuestasUsuario;
  }

  volver(){
    this._preguntaService.respuestasUsuario = [];
    this.router.navigate(['/'])
  }

}
