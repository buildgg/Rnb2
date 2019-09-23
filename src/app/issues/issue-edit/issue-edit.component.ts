import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import { switchMap, tap} from 'rxjs/internal/operators';
import {IssueService} from '../issue.service';
import {Issue} from '../model/issue';
import {IssueEditService} from './issue-edit.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'rnb-issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css']
})
export class IssueEditComponent implements OnInit {

  private paramSub: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private issueService: IssueService,
              private editService: IssueEditService) { }

  ngOnInit() {
    this.paramSub = this.route.paramMap
      .pipe(
        switchMap(
          (params: ParamMap) => this.issueService.getIssueByIdAndSiteId(
            params.get('site'),
            params.get('id'))
        ))
      .subscribe((val) => {
        console.log('IssueEditComponent in subscribe <..> ', val);
        this.editService.addIssue(val);
      }
      );
  }

  onCancel() {
    this.router.navigate(['/issue']);
  }

}
