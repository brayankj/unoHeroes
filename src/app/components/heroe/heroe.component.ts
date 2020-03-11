import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any = {}

  constructor(
    private _activatedRoute : ActivatedRoute,
    private _heroesService : HeroesService
  ){
    this._activatedRoute.params.subscribe( datos => {
      //console.log(datos['id']);
      this.heroe = this._heroesService.getHeroe(datos['id']);
    });
  }

  ngOnInit() {
  }

}
