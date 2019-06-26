import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {Column} from './table';

@Component({
  selector: 'rnb-table',
  templateUrl: './rnb-table.component.html',
  styleUrls: ['./rnb-table.component.css']
})
export class RnbTableComponent implements OnInit, OnChanges {
  @Input() columns: Column[];
  @Input() dataList;
  /*@Input() filterValue: string;*/
  @Input() selectedRowId;
  /*@Input() tableButtons /!*TableButtons*!/;*/

/*  @Output() clickUpdate = new EventEmitter();
  @Output() clickDelete = new EventEmitter();
  @Output() clickView = new EventEmitter();*/

  dataSource;
  displayedColumns: string[] = [];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  selection = new SelectionModel(true, []);

  ngOnInit() {
    this.displayedColumns = ['select'].concat(this.columns.map(value => value.columnDef).concat(['actions']));
  }
  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.dataList);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    /*this.applyFilter(this.filterValue);*/
  }

  onSelectedChange(row, valueCheck) {
    this.selection.toggle(row);
  }

/*
  applyFilter(filterValue: string) {
    if (filterValue != null) {
      filterValue = filterValue.trim();
      filterValue = filterValue.toLowerCase();
      this.dataSource.filter = filterValue;
    }
  }
*/

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

/*  onActionButtonUpdate(element) {
    this.clickUpdate.emit(element);
  }

  onActionButtonDelete(element) {
    this.clickDelete.emit(element);
  }
  onActionButtonView(element) {
    this.clickView.emit(element);
  }*/

}
