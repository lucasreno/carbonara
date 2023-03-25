import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Message } from '../interface/message';

const MODEL = 'gpt-4';
@Injectable({
  providedIn: 'root'
})
export class GptService {
  constructor(private http: HttpClient) { }

  private baseUrl = 'https://api.openai.com/v1/';
  private chatUrl = this.baseUrl + 'chat/completions';
  private imageUrl = this.baseUrl + 'images/generations';
  private headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set(
      'Authorization',
      'Bearer ' + environment.token
    );

  public makeRequest(messages: Message[], temperature: number, maxTokens: number): Observable<unknown> {
    const body = {
      messages: messages,
      temperature: temperature,
      max_tokens: maxTokens,
      model: MODEL,
    };

    return this.http
      .post(this.chatUrl, body, { headers: this.headers })
      .pipe(
        map((res: any) => {
          return res.choices[0].message;
        }),
        catchError((error) => {
          console.error(error);
          return throwError('Erro ao realizar requisição');
        })
      )
  }

  public makeImageRequest(prompt: string): Observable<unknown> {
    const body = {
      prompt: prompt,
      size: '256x256',
    }

    return this.http
      .post(this.imageUrl, body, { headers: this.headers })
      .pipe(
        map((res: any) => {
          return res.data[0].url;
        }),
        catchError((error) => {
          console.error(error);
          return throwError('Erro ao realizar requisição');
        })
      );
  }
}
