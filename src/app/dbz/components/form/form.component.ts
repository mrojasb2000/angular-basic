import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-form',
  templateUrl: 'form.component.html',
})
export class FormComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: uuid(),
    name: '',
    power: 0,
  };

  emitCharcater(): void {
    if ( this.character.name.length === 0 ) return;
    console.log(this.character);
    this.onNewCharacter.emit(this.character);
    this.character = { id: uuid(), name: '', power: 0 };
  }

 }
