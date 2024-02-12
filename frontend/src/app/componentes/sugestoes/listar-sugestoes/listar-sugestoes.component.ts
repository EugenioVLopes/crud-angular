import { Sugestao } from './../sugestao';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SugestaoComponent } from '../sugestao/sugestao.component';
import { NgFor, NgIf } from '@angular/common';
import { SugestaoService } from './../sugestao.service';

/**
 * Componente responsável por listar as sugestões.
 */
@Component({
  selector: 'app-listar-sugestoes',
  standalone: true,
  imports: [RouterLink,SugestaoComponent, NgIf, NgFor],
  templateUrl: './listar-sugestoes.component.html',
  styleUrl: './listar-sugestoes.component.css'
})
export class ListarSugestoesComponent implements OnInit{

  /**
   * Lista de sugestões a serem exibidas.
   */
  listaSugestoes: Sugestao[] = []

  constructor(private service: SugestaoService) {
  }

  /**
   * Método executado ao inicializar o componente.
   * Realiza a chamada ao serviço para obter a lista de sugestões.
   */
  ngOnInit(): void {
    this.service.listar().subscribe((listaSugestoes) => {
      this.listaSugestoes = listaSugestoes
    })
  }
}
