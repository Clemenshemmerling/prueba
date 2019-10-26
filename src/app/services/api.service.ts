import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(url) {
    return this.http.get(url);
  }

  getByID(url, id) {
    return this.http.get(url + id);
  }

  update(url, data) {
    return this.http.put(url + data.id, data);
  }

  post(url, data) {
    return this.http.post(url, data);
  }

  delete(url, id) {
    return this.http.delete(url, id);
  }

}
