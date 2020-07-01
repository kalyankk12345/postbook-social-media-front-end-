import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fixednav',
  templateUrl: './fixednav.component.html',
  styleUrls: ['./fixednav.component.css']
})
export class FixednavComponent implements OnInit {

  constructor() { }
  @Input() items:string[];
  @Input() link:string;
  ngOnInit(): void {
  }

}
