import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getProducts(): Observable<Product>{
    return this.http.get<Product>(this.apiUrl + '/products/getAll')
    .pipe(retry(1))
  }

  getProductsByName(name): Observable<Product>{
    return this.http.get<Product>(this.apiUrl + '/products/search/' + name)
    .pipe(retry(1))
  }


  // handleError(error){
  //   // let errorMessage = '';
  //   // if(error.error instanceof ErrorEvent) {
  //   //   // Get client-side error
  //   //   errorMessage = error.error.message;
  //   // } else {
  //   //   // Get server-side error
  //   //   errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   // }
  //   // window.alert(errorMessage);
  //   // return throwError(errorMessage);
  // }

  getProduct(id): Observable<Product>{
    return this.http.get<Product>(this.apiUrl + '/products/details/'+id)
    .pipe(retry(1))
  }

  createProduct(product): Observable<Product>{
    return this.http.post<Product>(this.apiUrl + '/products/create', JSON.stringify(product), this.httpOption)
    .pipe(retry(1))
  }

  updateProduct(id , product): Observable<Product>{
    return this.http.put<Product>(this.apiUrl + '/products/edit/'+ id, JSON.stringify(product), this.httpOption)
    .pipe()
  }
  deleteProduct(id){
    return this.http.delete<Product>(this.apiUrl + '/products/delete/' + id, this.httpOption)
    .pipe(
      retry(1),
    )
  }
}
