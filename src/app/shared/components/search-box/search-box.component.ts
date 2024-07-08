import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  @ViewChild('txtInput')
  public Input!: ElementRef <HTMLInputElement>;

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();


  public emitCapital = (): void => {
    this.onValue.emit(this.Input.nativeElement.value);
  }
}
