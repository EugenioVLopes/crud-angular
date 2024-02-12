import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Sugestao } from '../sugestao';

/**
 * Componente para exibir uma sugestão.
 */
@Component({
  selector: 'app-sugestao',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './sugestao.component.html',
  styleUrl: './sugestao.component.css',
})
export class SugestaoComponent implements OnInit {
  /**
   * Sugestão a ser exibida.
   */
  @Input() sugestao: Sugestao = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: '!Eugenio',
  };

  constructor() {}

  ngOnInit(): void {}

  /**
   * Retorna a classe CSS correspondente à largura da sugestão.
   * @returns A classe CSS correspondente à largura da sugestão.
   */
  larguraSugestao(): string {
    if (this.sugestao.conteudo.length >= 256) {
      return 'sugestao-g';
    }
    return 'sugestao-p';
  }
}
