import { Component } from '@angular/core';
import { PreguntaService } from '../../../services/pregunta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botonera',
  standalone: true,
  imports: [],
  templateUrl: './botonera.component.html',
  styleUrl: './botonera.component.css'
})
export class BotoneraComponent {

  btnString: string = 'Aceptar';

  constructor(public _preguntaService: PreguntaService, private router: Router){}

  siguiente(){
    switch(this.btnString){
      case 'Aceptar':{
        this._preguntaService.pregConfirmada = true;
        this.btnString = 'Siguiente';

        if(this._preguntaService.preguntas.length - 1 === this._preguntaService.indexPregunta){
          this.btnString = 'Finalizar';
        }
        break;
      }
      case 'Siguiente':{
        this._preguntaService.indexPregunta++;
        this._preguntaService.respuestasUsuario.push(this._preguntaService.indexRespuesta);
        this._preguntaService.deshabilitadBtn = true;
        this._preguntaService.pregConfirmada = false;
        this.btnString = 'Aceptar';
        break;
      }
      case 'Finalizar': {
        this._preguntaService.respuestasUsuario.push(this._preguntaService.indexRespuesta)
        this._preguntaService.opcionSeleccionada = null;
        this._preguntaService.pregConfirmada = false;
        this._preguntaService.indexPregunta = 0;
        this.router.navigate(['/resultado']);
        break;
      }
    }
  }
}
