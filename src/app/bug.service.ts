import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bug } from './Bug';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  constructor(private http: HttpClient) { }
  saveBug(bug: Bug) {
    return this.http.post('http://localhost:8080/bug', bug, {
      headers: {
        "content-type": 'application/json',
        reponseType: 'text'
      }
    });
  }

  updateBug(bugId, updatedBody) {
    const endpointURL = 'http://localhost:8080/bug/' + bugId;
    return this.http.put(endpointURL, updatedBody);
  }

  getBugs() {
    const httpHeaders = new HttpHeaders();
    const endpointURL = 'http://localhost:8080/bug/'
    httpHeaders.append('content-type', 'application/json');
    return this.http.get(endpointURL, { headers: httpHeaders });
  }

  getBug(endpointURL) {

    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.http.get(endpointURL, { headers: httpHeaders });

  }


}
