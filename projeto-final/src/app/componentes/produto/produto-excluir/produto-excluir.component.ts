import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../Produto.model';

@Component({
  selector: 'app-produto-excluir',
  templateUrl: './produto-excluir.component.html',
  styleUrls: ['./produto-excluir.component.css']
})
export class ProdutoExcluirComponent implements OnInit {

  public produto: Produto;

  constructor(private produtoService: ProdutoService, private rota: Router, private rotaSelecionada: ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this.rotaSelecionada.snapshot.paramMap.get('id');

    this.produtoService.obterPorId(id)
      .subscribe(produto => this.produto = produto);
  }

  public deletar(produto: Produto) {
    this.produtoService.excluir(produto.id).subscribe(() => {
      this.produtoService.mostrarMensagem(`Produto excluído!`);
      this.retornar();
    }, () => {
      this.produtoService.mostrarMensagem("Erro ao deletar produto.");
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
