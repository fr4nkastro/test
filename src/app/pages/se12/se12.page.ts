import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-se12',
  templateUrl: './se12.page.html',
  styleUrls: ['./se12.page.scss'],
})
export class Se12Page implements OnInit {

  componentes_sistemas_expertos=["Interfaz de usuario", "Módulo de explicación"]
  constructor() { }

  ngOnInit() {
  }

}
