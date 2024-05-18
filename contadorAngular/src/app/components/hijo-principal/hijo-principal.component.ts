import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo-principal',
  standalone: true,
  imports: [],
  templateUrl: './hijo-principal.component.html',
  styleUrl: './hijo-principal.component.css',
})
export class HijoPrincipalComponent {
  @Input() infoVar: string = '';
  contadorPrincipal: number = 0;

  @Output() agregarEstudianteEvent: EventEmitter<string> =
    new EventEmitter<string>();

  aumentarContador() {
    let y = this.contadorPrincipal++;
    console.log(y);
  }
  disminuirContador() {
    let x = this.contadorPrincipal--;
    console.log(x);
  }
  resetearContador() {
    this.contadorPrincipal = 0;
    console.log(this.contadorPrincipal);
  }

  agregarEstudianteHijo() {
    this.agregarEstudianteEvent.emit('Nombre');
  }
}
