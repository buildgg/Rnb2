import {Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Column} from '../ui/table/rnb-table/table';
import {FilterItem} from '../ui/filter/filter-list/filter-item';
import {Issue} from './issue';


const COLUMNS: Column[] = [
  {columnDef: 'univid', headerName: 'UNIVID', width: '40px',
    classCss: 'rnb-column-text-align-center' },
  {columnDef: 'id', headerName: 'ID', width: '40px' },
  {columnDef: 'issueno', headerName: '№ Заявки', width: '40px' },
  {columnDef: 'budgetdate', headerName: 'Дата бюджета', width: '40px', datePipe: 'true'},
  {columnDef: 'issuer', headerName: 'Инициатор',  width: '150px'},
  {columnDef: 'svodno', headerName: '№ свода',  width: '80px'},
  {columnDef: 'currolename', headerName: 'Ответственный',  width: '150px'},
  {columnDef: 'svoddate', headerName: 'Дата свода',  width: '120px', datePipe: 'true' },
  {columnDef: 'description', headerName: 'Описание', width: '300px' },
  {columnDef: 'budgetArticleTypesname', headerName: 'Тип бюджетных статей', width: '40px',
    classCss: 'rnb-column-text-align-center'},
  {columnDef: 'justification', headerName: 'Обоснование заявки', width: '300px' },


/*
  {columnDef: 'count', headerName: 'Количество', width: '40px'},


  {columnDef: 'responsiblePerson', headerName: 'Ответственный',  width: '150px'},
  {columnDef: 'collectionName', headerName: 'Свод',  width: '100px'},
  {columnDef: 'date', headerName: 'Дата', width: '100px'}*/
];

const ISSUES = [
  {
    univid: '1',
    id: '101',
    issueno: '123',
    budgetdate: '2017-02-12',
    issuer: 'Распорядитель IT',
    svodno: '4367',
    currolename: 'Хамза Хакимзаде Ния',
    svoddate: '2017-10-12',
    description: 'Очень необходимо два офисных стулья для чень необходимо',
    justification: 'Сидеть не на чем два офисных стулья для чень необходимо',
    budgetArticleTypesname: 'IT',
    site: '120'
  },
  {
    univid: '2',
    id: '103',
    issueno: '124',
    budgetdate: '2018-02-12',
    issuer: 'Распорядитель IT',
    svodno: '43345',
    currolename: 'Хамза Хакимзаде Ния',
    svoddate: '2018-10-12',
    description: 'Очень необходимо два офисных стулья для чень необходимо',
    justification: 'Сидеть не на чем два офисных стулья для чень необходимо',
    budgetArticleTypesname: 'ADMIN',
    site: '123'
  },
  {
    univid: '3',
    id: '105',
    issueno: '126',
    budgetdate: '2018-06-12',
    issuer: 'Распорядитль IT',
    svodno: '89',
    currolename: 'Хамза Хакимзаде Ния',
    svoddate: '2018-10-12',
    description: 'Очень необходимо два офисных стулья для чень необходимо',
    justification: 'Сидеть не на чем два офисных стулья для чень необходимо',
    budgetArticleTypesname: 'LEX',
    site: '780'
  },
  {
    univid: '4',
    id: '1654',
    issueno: '123',
    budgetdate: '2017-02-12',
    issuer: 'Распорядитель IT',
    svodno: '4367',
    currolename: 'Хамза Хакимзаде Ния',
    svoddate: '2017-10-12',
    description: 'Очень необходимо два офисных стулья для чень необходимо',
    justification: 'Сидеть не на чем два офисных стулья для чень необходимо',
    budgetArticleTypesname: 'IT',
    site: '780'
  },
  {
    univid: '5',
    id: '12356',
    issueno: '123',
    budgetdate: '2017-02-12',
    issuer: 'Распорядитель IT',
    svodno: '4367',
    currolename: 'Хамза Хакимзаде Ния',
    svoddate: '2017-10-12',
    description: 'Очень необходимо два офисных стулья для чень необходимо',
    justification: 'Сидеть не на чем два офисных стулья для чень необходимо',
    budgetArticleTypesname: 'IT',
    site: '120'
  },
  {
    univid: '6',
    id: '15688',
    issueno: '123',
    budgetdate: '2017-02-12',
    issuer: 'Распорядитель IT',
    svodno: '4367',
    currolename: 'Хамза Хакимзаде Ния',
    svoddate: '2017-10-12',
    description: 'Очень необходимо два офисных стулья для чень необходимо',
    justification: 'Сидеть не на чем два офисных стулья для чень необходимо',
    budgetArticleTypesname: 'IT',
    site: '120'
  },
];

@Component({
  selector: 'rnb-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IssueComponent {
  columns: Column[] = COLUMNS;
  issueList = ISSUES;
  selectedRowId: string = null;
  filterItems: string[];
  visibleHiddenBoxLayout: boolean = false;

  constructor(private router: Router,
              private route: ActivatedRoute) {}

  onFilterItems(filterItems: FilterItem[]) {
    this.visibleHiddenBoxLayout = true;
    this.filterItems = filterItems.map(val => {
      if (val.value === true) {
        return val.label;
      }
      return val.label + ': ' + val.value;
    });
  }

  onLastItemFilter() {
    this.visibleHiddenBoxLayout = false;
  }

  onEdit(issue: Issue) {
    console.log('issue: ' , issue);
    this.router.navigate([issue.site, issue.id, 'edit'], {relativeTo: this.route} );
  }

}
