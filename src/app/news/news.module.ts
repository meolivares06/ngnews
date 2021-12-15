import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsComponent } from './topics/topics.component';
import {NewsRoutingModule} from "./news-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { NewsComponent } from './news/news.component';
import { SpanishSourcesPipe } from './pipe/spanish-sources.pipe';



@NgModule({
  declarations: [
    TopicsComponent,
    NewsComponent,
    SpanishSourcesPipe
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    HttpClientModule
  ]
})
export class NewsModule { }
