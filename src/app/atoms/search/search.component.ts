import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() bg:string;
  @Input() color:string;
  @Input() placeholder:string;
  @Input() height:number;
  @Input() width:number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
