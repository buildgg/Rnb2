import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

const FILTER_LIST = [
  'Я - ответственный',
  'Заявки моего филиала',
  'Сумма: 2000 - 3000',
  'Дата: 01.01.2015 - 25.05.2019',
  'Филиал: Branch 12',
  'Тип статей: Заработная плата',
  'Инициатор: Распорядитель IT',
  'Описание: В отделение номер 5'
];

@Component({
  selector: 'rnb-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent implements OnChanges {
  @Input() list: string[] = FILTER_LIST;
  @Output() lastItemFilter = new EventEmitter();

  ngOnChanges() {
    console.log('ngOnChanges list: ', this.list);
  }

  close(item) {
    this.list = this.list.filter(value => value !== item);
    if (this.list.length === 0) {
      this.lastItemFilter.emit();
    }

  }





}
