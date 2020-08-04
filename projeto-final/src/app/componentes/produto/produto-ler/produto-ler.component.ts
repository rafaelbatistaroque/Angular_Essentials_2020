import { ProdutoService } from './../produto.service';
import { Produto } from './../Produto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-ler',
  templateUrl: './produto-ler.component.html',
  styleUrls: ['./produto-ler.component.css']
})
export class ProdutoLerComponent implements OnInit {

  public produtos: Produto[];
  colunasExibidasNaTabela = ["id", "nome", "preco", "acao"];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.obter()
      .subscribe(respostaProdutos => this.produtos = respostaProdutos,
        () => this.produtoService.mostrarMensagem("Erro ao obter produtos."));
  }

}
