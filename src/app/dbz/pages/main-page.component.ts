import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
  public characters: Character[] = [{
    name: "Krillin",
    power: 100
  },
  {
    name: "Goku",
    power: 9500
  },
  {
    name: "Vegeta",
    power: 7500
  }];

  onNewCharacter(character: Character): void {
    console.log(character);
    this.characters.push(character);
  }

  onDeleteCharacter(index: number): void {
    console.log(index);
    this.characters.splice(index, 1);
  }
}
