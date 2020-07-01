import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

//atoms
import { ButtonsComponent } from './atoms/buttons/buttons.component';
import { IconComponent } from './atoms/icon/icon.component';
import { SearchComponent } from './atoms/search/search.component';
import { ArrowButtonComponent } from './atoms/arrow-button/arrow-button.component';
import { PostimgComponent } from './atoms/postimg/postimg.component';
import { PostTextComponent } from './atoms/post-text/post-text.component';
import { PostheadComponent } from './atoms/posthead/posthead.component';
import { TextareaComponent } from './atoms/textarea/textarea.component';


//molecules
import { PostCardComponent } from './molecules/post-card/post-card.component';
import { FixednavComponent } from './molecules/fixednav/fixednav.component';
import { VerticalmenuComponent } from './molecules/verticalmenu/verticalmenu.component';
import { NewPostComponent } from './molecules/new-post/new-post.component';
import { LogoutComponent } from './molecules/logout/logout.component';



@NgModule({
  declarations: [
    AppComponent,
    PostCardComponent,
    ButtonsComponent,
    IconComponent,
    PostimgComponent,
    PostTextComponent,
    PostheadComponent,
    FixednavComponent,
    SearchComponent,
    VerticalmenuComponent,
    NewPostComponent,
    ArrowButtonComponent,
    TextareaComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
