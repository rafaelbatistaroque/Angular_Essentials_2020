import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common/";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componentes/templates/header/header.component';
import { FooterComponent } from './componentes/templates/footer/footer.component';
import { NavComponent } from './componentes/templates/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ProdutoCrudComponent } from './views/produto/produto-crud/produto-crud.component';
import { ProdutoCriarComponent } from './componentes/produto/produto-criar/produto-criar.component';
import { RedDirective } from './componentes/diretivas/red.directive';
import { ForDirective } from './componentes/diretivas/for.directive';
import { ProdutoLerComponent } from './componentes/produto/produto-ler/produto-ler.component';
import { ProdutoAtualizarComponent } from './componentes/produto/produto-atualizar/produto-atualizar.component';
import { ProdutoExcluirComponent } from './componentes/produto/produto-excluir/produto-excluir.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProdutoCrudComponent,
    ProdutoCriarComponent,
    RedDirective,
    ForDirective,
    ProdutoLerComponent,
    ProdutoAtualizarComponent,
    ProdutoExcluirComponent],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-BR" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
