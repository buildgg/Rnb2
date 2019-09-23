import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {from, Observable, of} from 'rxjs';

import {IssueEditService} from '../issue-edit.service';
import {MainEditView} from './main-edit-view';
import {GoodsWork} from '../../model/goodswork';
import {share} from 'rxjs/internal/operators';
import {GridComponent} from '../../../ui/grid/grid.component';
import {SettingsService} from '../../../core/settings.service';

@Component({
  selector: 'rnb-main-edit',
  templateUrl: './main-edit.component.html',
  styleUrls: ['./main-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainEditComponent implements OnInit, AfterViewInit {

  header: { column: string, columnTitle: string }[];
  dataGrid: GoodsWork[];

  @ViewChild(GridComponent) grid: GridComponent;

  private mainForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private editService: IssueEditService,
              private settingsService: SettingsService) {
  }

  ngOnInit() {

    this.settingsService.getColumns('headerGridMainEdit').subscribe(v => this.header = v);

    this.mainForm = this.fb.group({
      univid: '',
      id: '',
      issueno: '',
      budgetdate: '',
      issuer: '',
      svodid: [{value: '', disabled: true}],
      currolename: '',
      svoddate: [{value: '', disabled: true}],
      svodname: [{value: '', disabled: true}],
      description: '',
      justification: '',
      budgetArticleType: '',
      budgetArticle: '', /*responsiblecenter: '',*/
      issueState: '',
      site: '',
      summa: '',
      goodsworks: this.fb.group({
        description: '',
        evaluativesumma: '',
        gaugeid: '',
        gaugename: '',
        id: '',
        price: '',
        quantity: ''
      })
    });

    this.editService.getMainEdit().subscribe((val) => {
      const mainEdit = new MainEditView(val);
      console.log('mainEdit.goodsWorksList ', mainEdit.goodsworks);
      this.dataGrid = mainEdit.goodsworks;
      this.mainForm.patchValue(mainEdit);
    });
  }
  ngAfterViewInit() {
      this.grid.showData.asObservable()
        .subscribe(
          val => console.log('ngAfterViewInit MainEditComponent grid.getValue() ', val)
        );
  }
}
