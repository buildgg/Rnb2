import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Column} from '../ui/table/rnb-table/table';
import {FilterItem} from '../ui/filter/filter-list/filter-item';
import {Issue} from './model/issue';
import {ModalService} from '../ui/modal/modal.service';
import {IssueService} from './issue.service';
import {IssueView} from './model/issue-view';
import {map} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {SettingsService} from '../core/settings.service';

/*

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
];
*/


@Component({
  selector: 'rnb-issue',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IssuesComponent implements OnInit, OnDestroy {
  columns: Column[];
  issueList: IssueView[];
  selectedRowId: string = null;
  filterItems: string[];
  visibleHiddenBoxLayout: boolean = false;

  private issueSub: Subscription;
  private columnSub: Subscription;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private modal: ModalService,
              private issueService: IssueService,
              private settingsService: SettingsService) {}

   ngOnInit() {
    this.issueSub = this.issueService.getIssues()
      .pipe(
        map((val: Issue[]) => this.fromIssueToIssueView(val)))
      .subscribe((val) => {
  /*      console.log('issues[]: ', val);*/
        this.issueList = val;
      });

     this.columnSub = this.settingsService.getColumns('columnsIssue').subscribe(
       (v) => this.columns = v
     );

  /*  this.columnSub = this.issueService.getColumns().subscribe(
      (v: Column[]) => {
        console.log('Column[]: ', v);
        this.columns = v;
      }
    );*/


  }

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

  private fromIssueToIssueView(issues: Issue[]): IssueView[] {
    return issues.map(value => {
        return new IssueView(value);
    }
    );
  }

  ngOnDestroy() {
    this.issueSub.unsubscribe();
    this.columnSub.unsubscribe();
  }
}
