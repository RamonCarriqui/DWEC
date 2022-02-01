// AQUÍ SE DEFINEN LAS VARIABLES

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {
  titulo = "Dato en mi componente.ts de nota"; // Para usar la variable la paso al html del componente
  fecha = new Date();
  nombres = ["Manuel", "Pepe"];

  constructor() { }

  ngOnInit(): void {
  }

}
