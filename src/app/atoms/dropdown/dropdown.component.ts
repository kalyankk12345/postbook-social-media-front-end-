import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() items:any[];
  @Output() select=new EventEmitter();
  @Input() color='cyan-blue';
  @Input() theme;
  constructor() {

  }

  selectChangeHandler (event: any) {
    this.select.emit(event.target.value)
  }
  ngOnInit(): void {
  }

}
