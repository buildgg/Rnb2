import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {Column} from './table';

@Component({
  selector: 'rnb-table',
  templateUrl: './rnb-table.component.html',
  styleUrls: ['./rnb-table.component.css']
})
export class RnbTableComponent implements OnInit {
  @Input() columns: Column[];
  @Input() dataList;
  @Input() selectedRowId;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() view = new EventEmitter();

  dataSource;
  displayedColumns: string[] = [];
  selection = new SelectionModel(true, []);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;




  ngOnInit() {
    this.displayedColumns = ['select']
      .concat(this.columns.map(value => value.columnDef).concat(['actions']));
    /*this.displayedColumns = this.columns.map(value => value.columnDef);*/
    this.dataSource = new MatTableDataSource(this.dataList);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onSelectedChange(row, valueCheck) {
    this.selection.toggle(row);
  }

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

  onEdit(row) {
    this.edit.emit(row);
  }
  onDelete(row) {
    this.delete.emit(row);
  }
  onView(row) {
    this.view.emit(row);
  }

}
