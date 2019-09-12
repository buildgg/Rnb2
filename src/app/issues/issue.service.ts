import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Issue} from './model/issue';
import {Column} from './model/column';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private url = 'http://172.17.34.37:8080/JetB2/api/issues';
  private configColumnsUrl = 'assets/settings/columns.json';

  constructor(private http: HttpClient) { }

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.url, {withCredentials: true});
  }
  getColumns(): Observable<Column[]> {
    return this.http.get<any>(this.configColumnsUrl)
      .pipe(
        map(value => value.columns)
      );
  }



}
