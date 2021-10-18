import { Component } from '@angular/core';
import { Persona } from './persona.model';

import { DadoComponent } from './dado/dado.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  mensaje='';

  actualizar(t:number){
    this.mensaje=t + '( Se actualiza cada 10 segudos)';
  }

  title = 'Root';
  saludo = 'Saludos desde Angular';
  personas:Persona[]=[new Persona('Franflin','Jimenez'),
  new Persona('Juanita','Huefanita')];
}
