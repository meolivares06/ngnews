import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsService} from "../service/news.service";
import {filter, map, Observable, of, Subject, switchMap, takeUntil, tap} from "rxjs";
import {Article, RootSource, RootTopicsByContries, Source} from "../model/data";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {
  articles: Array<Article> = [];
  sources: Array<Source> = [];

  $unsubscription = new Subject<boolean>();

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNewsSources();
  }

  ngOnDestroy() {
    this.$unsubscription.next(true)
  }

  getNews(sources: string = 'techcrunch'): void {
    this.newsService.getNews(sources).pipe(
      map((response: RootTopicsByContries) => {
        return response.articles
      }),
      takeUntil(this.$unsubscription)
    ).subscribe((articles: Article[]) => {
      this.articles = [...articles];
    })
  }

  getNewsSources(): void {
    // @ts-ignore
    this.newsService.getNewsSources().pipe(
      tap((response: RootSource) => {
        this.sources = [...response.sources.filter((source: Source) => (source.language === 'es' && source.id !== 'la-nacion') )];
      }),
      map((response: RootSource) => {
        return response.sources.filter((source: Source) => (source.language === 'es'  && source.id !== 'la-nacion')  ).map(source => source.id )
      }),
      switchMap(response => this.newsService.getNews(response.toString())),
      map((response: RootTopicsByContries) => {
        return response.articles
      }),
      takeUntil(this.$unsubscription)
    ).subscribe((articles: Article[]) => {
      this.articles = [...articles];
      console.log(this.articles)
      console.log(this.sources)
    })
  }
}
