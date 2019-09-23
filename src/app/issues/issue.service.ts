import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {Issue} from './model/issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private url = 'http://172.17.34.37:8080/JetB2/api/issues';

  constructor(private http: HttpClient) { }

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.url, {withCredentials: true});
  }

  getIssueByIdAndSiteId(siteid: string, id: string): Observable<Issue> {
    const urlById = `http://172.17.34.37:8080/JetB2/api/issues/${siteid}/${id}`;
    return this.http.get<Issue>(urlById, {withCredentials: true});
  }
}
