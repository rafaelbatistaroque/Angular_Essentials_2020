import { Produto } from './Produto.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private urlBase: string = "http://localhost:3001/produtos";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  mostrarMensagem(msg: string): void {
    this.snackBar.open(msg, "FECHAR",
      { duration: 3000, horizontalPosition: "right", verticalPosition: "top" });
  }

  criar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.urlBase, produto).pipe(
      map(retorno => retorno), catchError(e => this.handleErro(e)));
  }

  handleErro(e: any): Observable<any> {
    this.mostrarMensagem("Ocorreu um erro! Tente em instantes.");
    return EMPTY;
  }

  obter(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.urlBase).pipe(
      map(retorno => retorno), catchError(e => this.handleErro(e)));
  }

  obterPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.urlBase}/${id}`).pipe(
      map(retorno => retorno), catchError(e => this.handleErro(e)));
  }

  atualizar(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.urlBase}/${produto.id}`, produto).pipe(
      map(retorno => retorno), catchError(e => this.handleErro(e)));
  }

  excluir(id: number): Observable<Produto> {
    return this.http.delete<Produto>(`${this.urlBase}/${id}`).pipe(
      map(retorno => retorno), catchError(e => this.handleErro(e)));
  }
}
