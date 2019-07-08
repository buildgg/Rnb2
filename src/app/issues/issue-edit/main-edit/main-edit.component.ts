import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'rnb-main-edit',
  templateUrl: './main-edit.component.html',
  styleUrls: ['./main-edit.component.css']
})
export class MainEditComponent implements OnInit {
  mainForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.mainForm = this.fb.group({
      univid: '',
      id: '',
      issueno: '',
      budgetdate: '',
      issuer: '',
      svodno: '',
      currolename: '',
      svoddate: '',
      description: '',
      justification: '',
      budgetArticleTypesname: '',
      site: ''
    });
  }

}
