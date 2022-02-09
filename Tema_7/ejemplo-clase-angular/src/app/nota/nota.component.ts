// AQUÍ SE DEFINEN LAS VARIABLES

import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { ListaNotasService } from '../lista-notas.service';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {
  @Input() pro = " ";
  @Input() datoapasar =" ";
  @Output() mievento = new EventEmitter<string>();

  titulo = "Dato en mi componente.ts de nota"; // Para usar la variable la paso al html del componente
  fecha = new Date();
  // nombres = new Array(); // Hay que definir arrays así para evitar fallos
  nombresServicio = ListaNotasService;
  nuevoUsuario = "";
  constructor(almacenDatos: ListaNotasService) { 
    this.nombresServicio = almacenDatos;
  }

  alta(){
    this.nombresServicio.notas.push(this.nuevoUsuario);
    this.mievento.emit(this.nuevoUsuario);

    this.nuevoUsuario= ""; // Pa dejar de nuevo el input vacío
  }
  ngOnInit(): void {
  }

}
