import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  indexPregunta: number = 0;
  opcionSeleccionada!: Respuesta | null;
  deshabilitadBtn: boolean = true;
  pregConfirmada: boolean = false;
  indexRespuesta: number = 0;
  respuestasUsuario: Array<number> = [];

  preguntas: Pregunta[] = [
    {descripcion: 'Cual es la capital de Argentina',
    respuestas: [ {nombre: 'Buenos aires', iscorrecta: true},
                  {nombre: 'Caracas', iscorrecta: false},
                  {nombre: 'Lima', iscorrecta: false},
                  {nombre: 'Santiago', iscorrecta: false}
                 ]
    },
    {descripcion: 'Cual es la capital de Fancia',
    respuestas: [ {nombre: 'Roma', iscorrecta: false},
                  {nombre: 'Paris', iscorrecta: true},
                  {nombre: 'Diblin', iscorrecta: false},
                  {nombre: 'Atenas', iscorrecta: false}
                 ]
    },
    {descripcion: 'Cual es la capital de Egipto',
    respuestas: [ {nombre: 'Londres', iscorrecta: false},
                  {nombre: 'Berlin', iscorrecta: false},
                  {nombre: 'El Cairo', iscorrecta: true},
                  {nombre: 'Casablanca', iscorrecta: false}
                 ]
    },

  ]

  constructor() { }

  getPreguntas(){
    return this.preguntas.slice();
  }
}
