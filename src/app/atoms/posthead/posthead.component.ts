import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posthead',
  templateUrl: './posthead.component.html',
  styleUrls: ['./posthead.component.css']
})
export class PostheadComponent implements OnInit {

  constructor() { }
  @Input() theme:string;
  @Input() link:string;
  ngOnInit(): void {
  }

}
