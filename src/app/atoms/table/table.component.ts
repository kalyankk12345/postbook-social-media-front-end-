import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() items;
  @Input() thcol;
  @Input() tdcol;
  @Input() hcol;
  @Input() dcol;
  item1:any[];
  columns:any[];
  constructor() {
   }
   isDate(val):boolean
  {
    return typeof val.getMonth==='function';
  }
  ngOnInit(): void
  {
    this.item1=this.items;
    this.columns=Object.keys(this.items[0]);
  }

}
