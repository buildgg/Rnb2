import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {filterMapping} from './filter-mapping';
import {FilterItem} from './filter-list/filter-item';

const SITES: string[] = ['Филиал 10', 'Branch 12', 'Филия 3', 'Site 54', 'Филиал 4', 'Филиал 67', 'Site 48'];

const ARTICLE_TYPE: string[] = ['Заработная плата ', 'Основные средства', 'МНА', 'Материалы'];

const ISSUER: string[] = ['Распорядитель IT', 'Issuer 2', 'Issuer 3'];


@Component({
  selector: 'rnb-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  animations: [trigger('EnterLeave', [
    state('moveIn',
      style({transform: 'translateX(0)'})),
    transition(':enter', [
      style({transform: 'translateX(100%)'}),
      animate('0.5s ease-in')]),
    transition(':leave', [
      animate('0.3s ease-out',
        style({transform: 'translateX(100%)'}))])
    ]
  )]
})

export class FilterComponent implements OnInit {

  @Output() filterItems = new EventEmitter();

  visible = false;
  filterGroup: FormGroup;

  sites: string[] = SITES;
  articleTypeArray: string[] = ARTICLE_TYPE;
  issuer: string[] = ISSUER;
  private filtersMapper = filterMapping;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.filterGroup = this.formBuilder.group({
      myIssue: '',
      myBranch: '',
      sum: this.formBuilder.group({
        sumFrom: '',
        sumTill: ''
      }),
      date: this.formBuilder.group({
        dateFrom: '',
        dateTill: ''
      }),
      site: '',
      articleType: '',
      issuer: '',
      description: ''
    });
  }

  show() {
    this.visible = !this.visible;
  }

  onSubmit() {
    const rawParam = this.filterGroup.value;
    const filterParam: FilterItem[] = this.getMappedItems(rawParam);
    this.show();
    if (filterParam.length !== 0) {
      this.filterItems.emit(filterParam);
    }
  }

  private getMappedItems(params): FilterItem[] {
    console.log('params: ', params);
    const rawParam = params;
    const filterParam = [];

    for (const key in rawParam) {
      if (typeof rawParam[key] !== 'object' && rawParam[key] !== '') {
        const label = this.findLabel(key).label;
        const value = rawParam[key];
        const name = key;
        const filterItem = new FilterItem(label, value, name);
        filterParam.push(filterItem);

      } else if (typeof rawParam[key] === 'object' && this.isExistValue(rawParam[key])) {
        const label = this.findLabel(key).label;
        const name = key;
        const firstValue = Object.values(rawParam[key])[0] === '' ?
          '...' : Object.values(rawParam[key])[0];
        const secondValue = Object.values(rawParam[key])[1] === '' ?
          '...' : Object.values(rawParam[key])[1];
        const value = firstValue + ' - ' + secondValue;
        const filterItem = new FilterItem(label, value, name);
        filterParam.push(filterItem);
      }
    }
    return filterParam;
  }

  private findLabel(keyParam: string) {
    return this.filtersMapper.find(val => val.field === keyParam);
  }

  private isExistValue(obj) {
/*    console.log(obj);
    if (obj === 'undefined' || obj === null) {
      return 0;
    }*/
    return Object.values(obj).filter(val => val !== '').length;

  }
  reset() {
    this.filterGroup.patchValue({
      myIssue: '',
      myBranch: '',
      sum: '',
      date: '',
      site: '',
      articleType: '',
      issuer: '',
      description: ''
    });
  }


}
