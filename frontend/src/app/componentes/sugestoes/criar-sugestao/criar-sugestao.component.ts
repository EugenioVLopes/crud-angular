import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Sugestao } from '../sugestao';
import { SugestaoService } from '../sugestao.service';

/**
 * Componente responsável por criar uma sugestão.
 */
@Component({
  selector: 'app-criar-sugestao',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './criar-sugestao.component.html',
  styleUrl: './criar-sugestao.component.css',
})
export class CriarSugestaoComponent implements OnInit {
  sugestao: Sugestao = {
    conteudo: '',
    autoria: '',
  };

  constructor(private service: SugestaoService, private router: Router) {}

  /**
   * Método executado ao inicializar o componente.
   */
  ngOnInit(): void {}

  /**
   * Cria uma nova sugestão.
   */
  criarSugestao() {
    this.service.criar(this.sugestao).subscribe(() => {
      this.router.navigate(['/listarSugestoes']);
    });
  }

  /**
   * Cancela a criação da sugestão e redireciona para a listagem de sugestões.
   */
  cancelar() {
    this.router.navigate(['/listarSugestoes']);
  }
}
