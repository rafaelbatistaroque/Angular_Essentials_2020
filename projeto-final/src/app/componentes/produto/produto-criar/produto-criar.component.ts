import { Produto } from './../Produto.model';
import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-produto-criar',
  templateUrl: './produto-criar.component.html',
  styleUrls: ['./produto-criar.component.css']
})
export class ProdutoCriarComponent implements OnInit {

  public produto: Produto = { nome: "", preco: null };

  constructor(private produtoService: ProdutoService, private rota: Router) { }

  ngOnInit(): void {
  }

  public criarProduto(produto: Produto): void {
    this.produtoService.criar(produto).subscribe(() => {
      this.produtoService.mostrarMensagem(`Produto: ${produto.nome} criado!`);
      this.retornar();
    }, () => {
      this.produtoService.mostrarMensagem("Erro ao criar registro.");
      this.retornar();
    });
  }

  public cancelar(): void {
    this.retornar();
  }

  private retornar() {
    this.rota.navigate(["/produto"]);
  }

}
