import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {ErrorAPI, RootSource, RootTopicsByContries} from "../model/data";

const API_KEY = 'apiKey=4736da7386db4798b6403afe9f25a016';
const apiUrl = `https://newsapi.org/v2/everything?${API_KEY}`;
const apiUrl2 = `https://newsapi.org/v2/sources?${API_KEY}`;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiURL = apiUrl;
  apiURL2 = apiUrl2;

  constructor(private http: HttpClient) { }

  getNews(sources: string): Observable<RootTopicsByContries> {
    const url = this.apiURL + '&pageSize=30' + `&sources=${sources}`;
    return this.http.get<RootTopicsByContries>(url).pipe(
      catchError(this.handleError<RootTopicsByContries>('getNews', {totalResults: 0, articles: [], status: ''}))
    )
  }

  getNewsSources(): Observable<RootSource> {
    const url = this.apiURL2;
    return this.http.get<RootSource>(url).pipe(
      catchError(this.handleError<RootSource>('getNewsSources', {sources: [], status: ''}))
    )
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed code: ${error.error.code}  message: ${error.error.message}`);

      // Let the app keep running by returning an empty result.

      return of(result as T);
    };
  }

  log(message: string): void {
    console.group('Error');
    console.group( message);
    console.groupEnd()
  }

}
