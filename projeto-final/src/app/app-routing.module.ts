import { ProdutoExcluirComponent } from './componentes/produto/produto-excluir/produto-excluir.component';
import { ProdutoAtualizarComponent } from './componentes/produto/produto-atualizar/produto-atualizar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { ProdutoCrudComponent } from "./views/produto/produto-crud/produto-crud.component";
import { ProdutoCriarComponent } from "./componentes/produto/produto-criar/produto-criar.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "produto", component: ProdutoCrudComponent },
  { path: "produto/criar", component: ProdutoCriarComponent },
  { path: "produto/atualizar/:id", component: ProdutoAtualizarComponent },
  { path: "produto/excluir/:id", component: ProdutoExcluirComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
