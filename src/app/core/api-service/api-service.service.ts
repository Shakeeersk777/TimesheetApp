import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getService(baseUrl: string, endpoint: string, params: any) {
    return this.http.get(`${baseUrl}/${endpoint}`, { params });
  }

  postService(baseUrl: string, endpoint: string, payload: any) {
    return this.http.post(`${baseUrl}/${endpoint}`, payload);
  }

  putService(baseUrl: string, endpoint: string, params: any) {
    return this.http.put(`${baseUrl}/${endpoint}`, params);
  }

  deleteService(baseUrl: string, endpoint: string, params: any) {
    return this.http.delete(`${baseUrl}/${endpoint}`, { params });
  }
}
