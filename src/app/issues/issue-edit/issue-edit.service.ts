import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {Issue} from '../model/issue';

/* TODO: providedIn fo module
*
* */

@Injectable({
  providedIn: 'root'
})
export class IssueEditService {

 private issue = new BehaviorSubject<Issue>(null);

  constructor() { }

  addIssue(issue: Issue) {
    this.issue.next(issue);
  }

  getMainEdit() {
    return this.issue.asObservable();
  }


}
