import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { Observable } from 'rxjs';

@Injectable()
export class ProdutosService {
  protected UrlServiceV1: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  obterProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.UrlServiceV1 + 'produtos');
  }
}
