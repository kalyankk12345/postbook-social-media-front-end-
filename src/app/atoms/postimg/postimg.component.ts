import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-postimg',
  templateUrl: './postimg.component.html',
  styleUrls: ['./postimg.component.css']
})
export class PostimgComponent implements OnInit {

  @Input() url:string;
  @Input() video:string;
  done=true;
  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('myVideo') videoplayer: ElementRef;

  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }
  toggleVideo1(){
    this.videoplayer.nativeElement.pause();
  }
}
