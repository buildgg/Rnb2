import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

const OPERATIONS: string[] =
  ['First of First', 'Second of second', 'Third of third', 'Fourth or 4'];

@Component({
  selector: 'rnb-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css'],
  animations: [
    trigger('showOperation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.5s', style({ opacity: 0 }))
      ])

    ])
  ]
})
export class OperationComponent {
  isVisible = false;
  @Input() operations: string[] = OPERATIONS;
  @Output() selected: EventEmitter<string> = new EventEmitter();

  constructor(private elRef: ElementRef) {}

  toggle() {
    this.isVisible = !this.isVisible;
  }
  selectedOperation(operation: string) {
    this.toggle();
    this.selected.emit(operation);
  }

  @HostListener('document:click', ['$event'])
  closeDropDown(event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.isVisible = false;
    }
  }





}
