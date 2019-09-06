import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'rnb-spinner',
  template: `<div class="loader"></div>`,
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
