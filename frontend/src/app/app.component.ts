import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { CriarSugestaoComponent } from './componentes/sugestoes/criar-sugestao/criar-sugestao.component';
import { ListarSugestoesComponent } from './componentes/sugestoes/listar-sugestoes/listar-sugestoes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CriarSugestaoComponent,
    ListarSugestoesComponent,
    HttpClientModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CRUD-ANGULAR';
}
