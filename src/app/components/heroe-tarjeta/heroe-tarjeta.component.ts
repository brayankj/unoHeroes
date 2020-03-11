import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  //@Input() envia informacion de componente padre a hijo
  @Input() heroe:any = {};
  @Input() index:number;

  //@Output() enviar del hijo al padre
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(
    private _router:Router
  ){
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe(){
    this._router.navigate(['/heroe',this.index]);
    // para usar el output this.heroeSeleccionado.emit(this.index);
  }

}
