import { Routes } from '@angular/router';
import { CriarSugestaoComponent } from './componentes/sugestoes/criar-sugestao/criar-sugestao.component';
import { EditarSugestaoComponent } from './componentes/sugestoes/editar-sugestao/editar-sugestao.component';
import { ExcluirSugestaoComponent } from './componentes/sugestoes/excluir-sugestao/excluir-sugestao.component';
import { ListarSugestoesComponent } from './componentes/sugestoes/listar-sugestoes/listar-sugestoes.component';

export const routes: Routes = [
  {
    path: '',
    component: ListarSugestoesComponent,
    pathMatch: 'full',
  },
  {
    path: 'criarSugestao',
    component: CriarSugestaoComponent,
  },
  { path: 'listarSugestoes', component: ListarSugestoesComponent },
  {
    path: 'sugestoes/excluirSugestao/:id',
    component: ExcluirSugestaoComponent,
  },
  {
    path: 'sugestoes/editarSugestao/:id',
    component: EditarSugestaoComponent,
  },
];
