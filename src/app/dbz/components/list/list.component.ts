import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: 'list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output()
  public onDeleteCharacter: EventEmitter<number> = new EventEmitter();


  @Input()
  public characterList: Character[] = [{
    name: "Trunks",
    power: 10,
  }]

  onDeleteBy(index: number) {
    console.log(index);
    this.onDeleteCharacter.emit(index);
  }

 }
