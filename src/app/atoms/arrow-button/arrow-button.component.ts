import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-button',
  templateUrl: './arrow-button.component.html',
  styleUrls: ['./arrow-button.component.css']
})
export class ArrowButtonComponent implements OnInit {
  @Input() arrow;
  constructor() { }

  ngOnInit(): void {
  }

}
