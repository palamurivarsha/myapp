import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';  // Correct relative path

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = environment.apiUrl;  // Use env variable

  constructor(private http: HttpClient) { }

  book(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/book/cart`, data);
  }
}
