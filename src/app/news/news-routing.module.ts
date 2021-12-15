import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TopicsComponent} from "./topics/topics.component";
import {NewsComponent} from "./news/news.component";
import {PageNotFoundComponent} from "../layout/page-not-found/page-not-found.component";

const routes: Routes = [
  {  path: 'topics', component: TopicsComponent },
  {  path: 'all', component: NewsComponent },
  {  path: '', redirectTo: 'topics', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
