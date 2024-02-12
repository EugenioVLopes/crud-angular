import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Sugestao } from '../sugestao';
import { SugestaoService } from '../sugestao.service';

@Component({
  selector: 'app-editar-sugestao',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './editar-sugestao.component.html',
  styleUrl: './editar-sugestao.component.css',
})
export class EditarSugestaoComponent {
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

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((sugestao) => {
      this.sugestao = sugestao;
    });
  }

  editarSugestao() {
    this.service.editar(this.sugestao).subscribe(() => {
      this.router.navigate(['/listarSugestoes']);
    });
  }

  cancelar() {
    this.router.navigate(['/listarSugestoes']);
  }
}
