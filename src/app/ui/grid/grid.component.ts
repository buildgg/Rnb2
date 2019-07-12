import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

const HEADERS = [
  {column: 'id', columnTitle: 'Id First'},
  {column: 'name', columnTitle: 'name Second'}
  ];
const DATA = [
  {id: 'Hi, Im your first cell', name: 'I\'m your second cell.'},
  {id: '2 Hi, Im your first cell', name: ' 2 I\'m your second cell.'},
  {id: '3 Hi, Im your first cell', name: ' 3 I\'m your second cell.'}
];

@Component({
  selector: 'rnb-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input()
  headers: {column: string, columnTitle: string}[] = HEADERS;
  @Input()
  dataSource = DATA;

  selected;

  editGroup: FormGroup;
  addGroup: FormGroup;

  @ViewChild('tableTmp') tableTmp: TemplateRef<any>;
  @ViewChild('editTmp') editTmp: TemplateRef<any>;
  @ViewChild('addTmp') addTmp: TemplateRef<any>;

  private activeNow: 'table' | 'edit' | 'add' = 'table';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const objHead = {};
    this.headers.forEach(value => objHead[value.column] = '');
    this.editGroup = this.fb.group(objHead);
    this.addGroup = this.fb.group(objHead);
  }

  edit(data) {
    if (this.activeNow === 'table' ||  this.activeNow === 'edit') {
      this.selected = data;
      this.editGroup.patchValue(data);
      this.activeNow = 'edit';
    }
  }
  selectTemplate(data) {
    return this.activeNow === 'edit' &&
    this.selected === data ? this.editTmp : this.tableTmp;
  }
  addRow() {
    if (this.activeNow === 'table') {
      this.addGroup.reset();
      this.activeNow = 'add';
    }
  }
  addTemplate() {
/*    return this.activeNow === 'add' && this.activeNow !== 'edit' ? this.addTmp : ''; */
    return this.activeNow === 'add' ? this.addTmp : '';
  }
  cancel() {
    this.activeNow = 'table';
  }
  accept(data) {
    this.activeNow = 'table';
    Object.assign(this.selected, this.editGroup.value);

    /* TODO in service*/
    const index = this.dataSource.findIndex(val => val === this.selected);
    Object.assign(this.dataSource[index], data);
  }
  add(data) {
    this.activeNow = 'table';
    /* TODO in service*/
    this.dataSource.push(data.value);
  }
}
