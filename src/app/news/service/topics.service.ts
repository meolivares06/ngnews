import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RootTopicsByContries} from "../model/data";

const API_KEY = 'apiKey=4736da7386db4798b6403afe9f25a016';
const apiUrl = `https://newsapi.org/v2/top-headlines?${API_KEY}&language=es`;

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  apiURL = apiUrl;

  constructor(private http: HttpClient) { }

  getTopicsByContry(): Observable<RootTopicsByContries> {
    const url = this.apiURL + '&country=us';
    return this.http.get<RootTopicsByContries>(url)
  }

  getTopicsByCategory(): Observable<RootTopicsByContries> {
    const url = this.apiURL + '&category=general';
    return this.http.get<RootTopicsByContries>(url)
  }

  getTopics(): Observable<RootTopicsByContries> {
    const url = this.apiURL;
    return this.http.get<RootTopicsByContries>(url)
  }
}
