import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../../products/models/product.model';

export interface ProductsApiResponse<T> {
  data: T;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = `${environment.apiBaseUrl}/bp/products`;

  constructor(private http: HttpClient) { }

  // Obtener todos los productos
  getProducts(): Observable<Product[]> {
    return this.http.get<ProductsApiResponse<Product[]>>(this.apiUrl)
      .pipe(
        map(response => response.data),
        this.logDebug('Products fetched:'),
        catchError(this.handleError)
      );
  }

  // Crear un nuevo producto
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product)
      .pipe(
        this.logDebug('Product created:'),
        catchError(this.handleError)
      );
  }

  // Actualizar un producto existente
  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product)
      .pipe(
        this.logDebug('Product updated:'),
        catchError(this.handleError)
      );
  }

  // Eliminar un producto
  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
      .pipe(
        this.logDebug(`Product with ID ${id} deleted`),
        catchError(this.handleError)
      );
  }

  // Verificar si un ID existe
  verifyProductId(id: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/verification/${id}`)
      .pipe(
        this.logDebug(`ID verification for ${id}: `),
        catchError(this.handleError)
      );
  }

  // Manejo centralizado de errores
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Error del cliente o red
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Error del backend
      errorMessage = `Backend returned code ${error.status}, body: ${JSON.stringify(error.error)}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  //Manje de logs en desarrollo
  const logDebug = <T>(message: string) => tap<T>(data => {
    if (!environment.production) console.log(message, data);
  });
}
