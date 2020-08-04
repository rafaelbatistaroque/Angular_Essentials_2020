import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from './../produto.service';
import { Produto } from './../Produto.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produto-atualizar',
  templateUrl: './produto-atualizar.component.html',
  styleUrls: ['./produto-atualizar.component.css']
})
export class ProdutoAtualizarComponent implements OnInit {

  public produto: Produto;

  constructor(private produtoService: ProdutoService, private rota: Router, private rotaSelecionada: ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this.rotaSelecionada.snapshot.paramMap.get('id');

    this.produtoService.obterPorId(id)
      .subscribe(produto => this.produto = produto);
  }

  atualizar(produto: Produto): void {
    this.produtoService.atualizar(produto).subscribe((respostaAtualizacao) => {
      this.produtoService.mostrarMensagem(`Produto: ${respostaAtualizacao.nome} atualizado!`);
      this.retornar();
    }, () => {
      this.produtoService.mostrarMensagem("Erro ao atualizar produto.");
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
