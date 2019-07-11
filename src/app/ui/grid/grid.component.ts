import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

const HEADERS = ['First', 'Second'/*, 'Three', 'Fourth'*/];
const DATA = [
  {firstcell: 'Hi, Im your first cell', secondcell: 'I\'m your second cell.'},
  {firstcell: '2 Hi, Im your first cell', secondcell: ' 2 I\'m your second cell.'},
  {firstcell: '3 Hi, Im your first cell', secondcell: ' 3 I\'m your second cell.'}
];

@Component({
  selector: 'rnb-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  headers: string[] = HEADERS;
  dataSource = DATA;
  selected: {firstcell: '', secondcell: ''};
  private activeNow: 'table' | 'edit' | 'add' = 'table';


  @ViewChild('tableTmp') tableTmp: TemplateRef<any>;
  @ViewChild('editTmp') editTmp: TemplateRef<any>;
  @ViewChild('addTmp') addTmp: TemplateRef<any>;

  edit(data) {
    if (this.activeNow === 'table' ||  this.activeNow === 'edit') {
      this.selected = data;
      this.activeNow = 'edit';
    }
  }
  selectTemplate(data) {
    return this.activeNow === 'edit' &&
    this.selected.firstcell === data.firstcell ? this.editTmp : this.tableTmp;
  }
  addRow() {
    if (this.activeNow === 'table') {
      this.activeNow = 'add';
    }

  }
  addTemplate() {
    return this.activeNow === 'add' &&
    this.activeNow !== 'edit'
      ? this.addTmp : '';

  }

  cancel() {
    this.activeNow = 'table';
  }

  accept(data) {
    console.log('accept data = ', data );
    this.activeNow = 'table';
  }

}
