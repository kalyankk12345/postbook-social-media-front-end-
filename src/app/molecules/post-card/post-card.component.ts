import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/post';


@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Input() posts:any[];
  k:string;
  s='you and '
  constructor() { }
  ngOnInit(): void {

  }
  do(post:Post)
  {
    if(post.like=='true')
    post.like='false';
    else
    post.like='true'

  }

}
