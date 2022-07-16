import * as data from '../../data.json';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  cryptocurrencies: any = (data as any).default;

  searchText = '';    // ⬅️ filterAll pipe

  /* ------------------------ VIRTUAL SCROLL PROPERTIES ----------------------- */
  itemSize = '2.5rem';
  viewportHeightPx = 500;

  /* ------------------------------ COLUMN WIDTHS ----------------------------- */
  config: any = {
    columnWidth: {
      _1: '50%',
      _2: 'auto',
      _3: 'auto',
      _4: 'auto',
      _5: 'auto',
      _6: 'auto',
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
