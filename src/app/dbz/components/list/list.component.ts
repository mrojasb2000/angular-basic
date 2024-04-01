import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: 'list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output()
  public onDeleteCharacter: EventEmitter<String> = new EventEmitter();


  @Input()
  public characterList: Character[] = [{
    id: uuid(),
    name: "Trunks",
    power: 10,
  }]

  onDeleteCharacterById(index: String) {
    console.log(index);
    this.onDeleteCharacter.emit(index);
  }

 }


