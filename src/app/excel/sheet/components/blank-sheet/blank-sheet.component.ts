import { Component, OnInit } from '@angular/core';

import * as Handsontable from 'handsontable';
import { HotTableRegisterer } from '@handsontable/angular';

@Component({
  selector: 'blank-sheet',
  templateUrl: './blank-sheet.component.html',
  styleUrls: ['./blank-sheet.component.css']
})
export class BlankSheetComponent implements OnInit {

  public columns: any[] = [
    { data: 'name', title: 'Name' },
    { data: 'id', title: 'ID' },
    { data: 'age', title: 'age' },
  ];

  public data: any[] = [
    { id: 1, name: 'Sajjad', age: 21 },
    { id: 2, name: 'Saad', age: 21 },
    { id: 3, name: 'Sheroz', age: 21 },
    { id: 4, name: 'Daniyal', age: 21 }
  ];

  public settings: Handsontable.GridSettings = {
    height: 500,
    width: 1150,
    autoWrapRow: true,
    manualColumnMove: true,
    manualColumnResize: true,
    manualRowMove: true,
    manualRowResize: true,
    maxRows: 20,
    rowHeaders: true,
  };

  constructor() {
  }

  ngOnInit() {
  }
}
