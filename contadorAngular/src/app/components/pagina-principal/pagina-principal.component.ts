import { Component } from '@angular/core';
import { HijoPrincipalComponent } from '../hijo-principal/hijo-principal.component';
@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [HijoPrincipalComponent],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css',
})
export class PaginaPrincipalComponent {}
