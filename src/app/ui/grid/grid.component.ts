import {Component, Input, OnChanges, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {BehaviorSubject, Subscription} from 'rxjs';


/*const HEADERS = [
  {column: 'id', columnTitle: 'Id First', width: '30%'},
  {column: 'name', columnTitle: 'name Second',  width: '50%'},
  {column: 'gague', columnTitle: 'мера',  width: '10%'},
  {column: 'price', columnTitle: 'цена',  width: '10%'}

];
const DATA = [
  {id: 'Hi, Im your first cell', name: 'I\'m your second cell.', gague: 'шт.', price: '12.45'},
  {id: '2 Hi, Im your first cell', name: ' 2 I\'m your second cell.', gague: 'шт.', price: '45.90'},
  {id: '3 Hi, Im your first cell', name: ' 3 I\'m your second cell.', gague: 'шт.', price: '15.01'}
];*/

@Component({
  selector: 'rnb-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, OnDestroy, OnChanges {
  @Input() headers: { column: string, columnTitle: string }[];
  @Input() dataSource;
  @Input() footerFieldName: string = 'price';

  showData = new BehaviorSubject<any>(null);
  private footerData: Subscription;
  selected;
  footer: number;
  editGroup: FormGroup;
  addGroup: FormGroup;

  @ViewChild('tableTmp') tableTmp: TemplateRef<any>;
  @ViewChild('editTmp') editTmp: TemplateRef<any>;
  @ViewChild('addTmp') addTmp: TemplateRef<any>;
  @ViewChild('footerTable') footerTable: TemplateRef<any>;

  private activeNow: 'table' | 'edit' | 'add' = 'table';

  constructor(private fb: FormBuilder) {}

  ngOnChanges() {
    this.showData.next(this.dataSource);
    this.initFormGroup();
  }

  ngOnInit() {
    this.footerData = this.showData.asObservable().subscribe(
          value => {
            if (value) {
              this.footer = value
                .map(x => +x[this.footerFieldName])
                .reduce((acc, val) => acc + val, 0);
            }
          }
        );
  }

  selectTemplate(data) {
    return this.activeNow === 'edit' && this.selected === data ? this.editTmp : this.tableTmp;
  }

  addTemplate() {
    return this.activeNow === 'add' ? this.addTmp : '';
  }

  isAddFooterTemplate() {
    return this.footerTable;
  }

  edit(data) {

    if (this.activeNow === 'table' || this.activeNow === 'edit') {
      this.selected = data;
      this.editGroup.patchValue(data);
      this.activeNow = 'edit';
    }
  }

  addRow() {
    if (this.activeNow === 'table') {
      this.addGroup.reset();
      this.activeNow = 'add';
    }
  }

  cancel() {
    this.activeNow = 'table';
  }

  acceptEdit() {
    this.activeNow = 'table';
    Object.assign(this.selected, this.editGroup.value);
  }

  add(data: FormGroup) {
    this.activeNow = 'table';
    if (this.isFormGroupValueNotNull(data)) {
     this.dataSource.push(data.value);
     this.showData.next(this.dataSource);
   }
  }

  deleteRow(data) {
    this.dataSource = this.dataSource.filter(val => val !== data);
    this.showData.next(this.dataSource);
  }

  private initFormGroup() {
    const objHead = {};
    if (this.headers) {
      this.headers.forEach(value => objHead[value.column] = '');
      this.editGroup = this.fb.group(objHead);
      this.addGroup = this.fb.group(objHead);
    }

  }
  private isFormGroupValueNotNull(formGroup: any): boolean {
    return !!Object.values(formGroup.value).find(val => val !== null);
  }

  ngOnDestroy() {
    this.footerData.unsubscribe();
  }
}
