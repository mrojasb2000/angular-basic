import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: "Krillin",
    power: 100
  },
  {
    id: uuid(),
    name: "Goku",
    power: 9500
  },
  {
    id: uuid(),
    name: "Vegeta",
    power: 7500
  }];


  addCharacter(character: Character): void {
    const newCharacter: Character = { ...character, id: uuid()}

    this.characters.push(newCharacter);
  }

  deleteCharacterById(index: String): void {
    console.log(index);
    this.characters = this.characters.filter( character => character.id !== index );
  }
}
