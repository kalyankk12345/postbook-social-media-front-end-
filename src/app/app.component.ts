import { Component } from '@angular/core';
import { Post } from './post';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'posts';
  Array=['Home','Messages','Profile'];
  constructor(private http:HttpClient)
  {
    this.p();
  }
  menu=['Friends','Messages','Games','Photos'];
  posts:Post[];
  p():void
  {
  this.http.get<Post[]>('assets/posts.json').subscribe(response => {
    this.posts=response;
    },
error => console.log(error),
    );
  }

}
