import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit, OnDestroy {


  private debounser: Subject<string> = new Subject<string>();
  private debounserSubscription?: Subscription;

  @ViewChild('txtInput')
  public Input!: ElementRef <HTMLInputElement>;

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();




  ngOnInit(): void {
    this.debounserSubscription =  this.debounser
    .pipe(
      debounceTime(300)
    )
    .subscribe(value => {
      this.onDebounce.emit(value)
    })
  }

  ngOnDestroy(): void {
    this.debounserSubscription?.unsubscribe();
  }

  public emitCapital = (): void => {
    this.onValue.emit(this.Input.nativeElement.value);
  }


  public onKeyPress = (searchTerm:string) => {
    this.debounser.next(searchTerm)

  }
}
