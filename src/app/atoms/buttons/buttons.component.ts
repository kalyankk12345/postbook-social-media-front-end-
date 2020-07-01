import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  b=true;
  @Input() theme:string;
  @Input() text:string;
  constructor() { }

  ngOnInit(): void {
  }

}
