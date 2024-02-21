import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  email: string='';
  nombre: string='';
  movil: string='';
  datosEnviados: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  enviarFormulario() {
    this.datosEnviados.push({
      email: this.email,
      nombre: this.nombre,
      movil: this.movil
    });

    this.email = '';
    this.nombre = '';
    this.movil = '';
  }

}
