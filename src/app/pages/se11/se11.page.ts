import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-se11',
  templateUrl: './se11.page.html',
  styleUrls: ['./se11.page.scss'],
})
export class Se11Page implements OnInit {
  componentes_sistemas_expertos =  ["Base de conocimiento",
  "Motor de inferencias",
    "Módulo de adquisición de conocimiento y aprendizaje"];
  constructor() {

   }

  ngOnInit() {
  }
  

}
