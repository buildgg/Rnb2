import { Component, OnInit } from '@angular/core';
const DATA = [
  {id: 'Hi, Im your first cell', name: 'I\'m your second cell.', price: '12.45'},
  {id: '2 Hi, Im your first cell', name: ' 2 I\'m your second cell.', price: '45.90'},
  {id: '3 Hi, Im your first cell', name: ' 3 I\'m your second cell.', price: '15.01'}
];
@Component({
  selector: 'rnb-isma-edit',
  templateUrl: './isma-edit.component.html',
  styleUrls: ['./isma-edit.component.css']
})
export class IsmaEditComponent implements OnInit {
  data = DATA;
  constructor() { }

  ngOnInit() {
  }

}
