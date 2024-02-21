import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inf',
  templateUrl: './inf.component.html',
  styleUrls: ['./inf.component.scss']
})
export class InfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fechaSeleccionada: any;
  toggleCalendar() {
    // Busca el elemento de entrada de fecha por su ID y activa el método datepicker de Bootstrap
    const fechaInput = document.getElementById('fecha');
    if (fechaInput) {
      fechaInput.dispatchEvent(new Event('focus'));
    }
  }

}
