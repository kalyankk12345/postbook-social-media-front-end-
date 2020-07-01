import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-verticalmenu',
  templateUrl: './verticalmenu.component.html',
  styleUrls: ['./verticalmenu.component.css']
})
export class VerticalmenuComponent implements OnInit {

  constructor() { }
  @Input() items:string[];
  ngOnInit(): void {
  }

}
