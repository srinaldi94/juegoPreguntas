import { Component } from '@angular/core';
import { BotoneraComponent } from './botonera/botonera.component';
import { PreguntaService } from '../../services/pregunta.service';
import { Pregunta } from '../../models/pregunta';
import { CommonModule } from '@angular/common';
import { Respuesta } from '../../models/respuesta';

@Component({
  selector: 'app-pregunta',
  standalone: true,
  imports: [BotoneraComponent, CommonModule],
  templateUrl: './pregunta.component.html',
  styleUrl: './pregunta.component.css'
})
export class PreguntaComponent {

  listaPreguntas!: Pregunta[];

  constructor(public _preguntaServices: PreguntaService){}

  ngOnInit(){
    this.listaPreguntas = this._preguntaServices.getPreguntas();
  }

  obtenerPregunta(){
    return this.listaPreguntas[this._preguntaServices.indexPregunta].descripcion;
  }

  respuestaSeleccionada(respuesta: Respuesta, index: number){
    if(this._preguntaServices.pregConfirmada === true){
      return;
    }
    this._preguntaServices.opcionSeleccionada = respuesta;
    this._preguntaServices.deshabilitadBtn = false;
    this._preguntaServices.indexRespuesta = index;
  }

  addClassOption(respuesta: Respuesta){
    if(respuesta === this._preguntaServices.opcionSeleccionada && !this._preguntaServices.pregConfirmada){
      return 'active text-light';
    }

    if(respuesta === this._preguntaServices.opcionSeleccionada && this._preguntaServices.pregConfirmada && this._preguntaServices.opcionSeleccionada.iscorrecta === true){
      return 'bg-success';
    }

    if(respuesta === this._preguntaServices.opcionSeleccionada && this._preguntaServices.pregConfirmada && this._preguntaServices.opcionSeleccionada.iscorrecta === false){
      return 'bg-danger';
    }

    return;
  }

  iconCorrecta(respuesta: Respuesta){
    if(respuesta === this._preguntaServices.opcionSeleccionada && this._preguntaServices.pregConfirmada && this._preguntaServices.opcionSeleccionada.iscorrecta === true){
      return true;
    }else{
      return false;
    }
  }

  iconIncorrecta(respuesta: Respuesta){
    if(respuesta === this._preguntaServices.opcionSeleccionada && this._preguntaServices.pregConfirmada && this._preguntaServices.opcionSeleccionada.iscorrecta === false){
      return true;
    }else{
      return false;
    }
  }
}
