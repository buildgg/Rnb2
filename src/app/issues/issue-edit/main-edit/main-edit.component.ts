import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'rnb-main-edit',
  templateUrl: './main-edit.component.html',
  styleUrls: ['./main-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainEditComponent implements OnInit {
  header: {column: string, columnTitle: string}[] = [
    {column: 'id', columnTitle: 'id'},
    {column: 'desc', columnTitle: 'Описание ТМЦ работ, услуг'},
    {column: 'scale', columnTitle: 'измерение'},
    {column: 'count', columnTitle: 'количество'},
    {column: 'price', columnTitle: 'цена'},
    {column: 'aproc', columnTitle: 'Приблизительная сумма'},

  ];

  mainForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.mainForm = this.fb.group({
      univid: '',
      id: '',
      issueno: '',
      budgetdate: '',
      issuer: '',
      svodid: '',
      currolename: '',
      svoddate: '',
      svodname: '',
      description: '',
      justification: '',
      budgetArticleType: '',
      budgetArticle: '',
      responsiblecenter: '',
      issueState: '',
      site: '',
      summa: '',
      excessSumma: ''
    });
  }

}
