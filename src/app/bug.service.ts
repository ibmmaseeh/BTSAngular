import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bug } from './Bug';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  constructor(private http:HttpClient) { }
  save(bug:Bug){
    const httpHeaders=new HttpHeaders();
    httpHeaders.append("content-type","application/json");
    return this.http.post('http://localhost:8080/bug',bug,{headers: httpHeaders,
    responseType:"text"});
  }
}
