import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor(private ps: HeroesService) { }

  get personajes(){
    return this.ps.personajes;
  }

  ngOnInit(): void {
  }
  
}
