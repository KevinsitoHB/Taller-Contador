import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css',
})
export class PaginaPrincipalComponent {
  contadorPrincipal: number = 0;

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
}
