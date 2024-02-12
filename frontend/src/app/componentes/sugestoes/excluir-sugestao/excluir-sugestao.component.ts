import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sugestao } from '../sugestao';
import { SugestaoService } from '../sugestao.service';

/**
 * Componente responsável por excluir uma sugestão.
 */
@Component({
  selector: 'app-excluir-sugestao',
  standalone: true,
  imports: [],
  templateUrl: './excluir-sugestao.component.html',
  styleUrl: './excluir-sugestao.component.css',
})
export class ExcluirSugestaoComponent {
  /**
   * Objeto que representa a sugestão a ser excluída.
   */
  sugestao: Sugestao = {
    id: 0,
    conteudo: '',
    autoria: '',
  };

  constructor(
    private service: SugestaoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  /**
   * Método executado ao inicializar o componente.
   * Busca a sugestão pelo ID fornecido na rota e atribui ao objeto sugestao.
   */
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((sugestao) => {
      this.sugestao = sugestao;
    });
  }

  /**
   * Método responsável por excluir a sugestão.
   * Verifica se o ID da sugestão está definido e, em caso esteja, realiza a exclusão através do service.
   * Após a exclusão, redireciona para a página de listar sugestões.
   */
  excluirSugestao() {
    if (this.sugestao.id) {
      this.service.excluir(this.sugestao.id).subscribe(() => {
        this.router.navigate(['/listarSugestoes']);
      });
    }
  }

  /**
   * Método responsável por cancelar a exclusão da sugestão.
   * Redireciona para a página de listar sugestões.
   */
  cancelar() {
    this.router.navigate(['/listarSugestoes']);
  }
}
