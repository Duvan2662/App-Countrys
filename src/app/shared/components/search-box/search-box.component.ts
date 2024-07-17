import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit {

  private debounser: Subject<string> = new Subject<string>();

  @ViewChild('txtInput')
  public Input!: ElementRef <HTMLInputElement>;

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();


  ngOnInit(): void {
    this.debounser
    .pipe(
      debounceTime(300)
    )
    .subscribe(value => {
      this.onDebounce.emit(value)
    })
  }

  public emitCapital = (): void => {
    this.onValue.emit(this.Input.nativeElement.value);
  }


  public onKeyPress = (searchTerm:string) => {
    this.debounser.next(searchTerm)

  }
}
