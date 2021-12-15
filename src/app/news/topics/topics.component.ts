import {Component, OnDestroy, OnInit} from '@angular/core';
import {TopicsService} from "../service/topics.service";
import {Article, RootTopicsByContries} from "../model/data";
import {map, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit, OnDestroy {
  articles: Array<Article> = [];

  $unsubscription = new Subject<boolean>();

  constructor(private topicsService: TopicsService) { }

  ngOnInit(): void {
    this.getTopics();
  }

  ngOnDestroy() {
    this.$unsubscription.next(true);
  }

  getTopicsByContry(): void {
    this.topicsService.getTopicsByContry().pipe(
      map((response: RootTopicsByContries) => {
        return response.articles
      }),
      takeUntil(this.$unsubscription)
    ).subscribe((articles: Article[]) => {
      this.articles = [...articles]
    });
  }

  getTopicsByCategory(): void {
    this.topicsService.getTopicsByCategory().pipe(
      map((response: RootTopicsByContries) => {
        return response.articles
      })
    ).subscribe((articles: Article[]) => {
      this.articles = [...articles]
    });
  }

  getTopics(): void {
    this.topicsService.getTopics().pipe(
      map((response: RootTopicsByContries) => {
        return response.articles
      })
    ).subscribe((articles: Article[]) => {
      this.articles = [...articles]
    });
  }
}
