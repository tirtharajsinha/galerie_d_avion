import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {


  private URI = "https://doc8643.com/get-aircraft/"
  constructor(private http: HttpClient) { }

  getAircrafts(query: string) {
    var headers = new HttpHeaders({ "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36" });
    let url = this.URI + query
    return this.http.get(url, { headers });
  }


}
