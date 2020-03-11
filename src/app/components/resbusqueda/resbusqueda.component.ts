import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-resbusqueda',
  templateUrl: './resbusqueda.component.html',
  styleUrls: ['./resbusqueda.component.css']
})
export class ResbusquedaComponent implements OnInit {

  heroes:any [] = [];
  termino:string;

  constructor(
    private _heroesService : HeroesService,
    private _activatedRoute : ActivatedRoute,
    private _router : Router
  ){ }

  ngOnInit() {
    this._activatedRoute.params.subscribe( datos => {
      this.termino = datos['termino'];
      this.heroes = this._heroesService.buscarHeroes(datos['termino']);
    });
  }

  verHeroe(j:number){
    console.log(j);
    this._router.navigate(['/heroe',j]);
  }

}
