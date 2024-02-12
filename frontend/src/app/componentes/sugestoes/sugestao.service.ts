import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sugestao } from './sugestao';
import { Observable } from 'rxjs';

/**
 * Serviço responsável por realizar operações relacionadas às sugestões.
 */
@Injectable({
  providedIn: 'root'
})
export class SugestaoService {

  private readonly API = 'http://localhost:3000/sugestoes'

  constructor(private http: HttpClient) { }

  /**
   * Retorna uma lista de sugestões.
   * @returns Um Observable contendo um array de objetos do tipo Sugestao.
   */
  listar(): Observable<Sugestao[]> {
    return this.http.get<Sugestao[]>(this.API)
  }

  /**
   * Cria uma nova sugestão.
   * @param sugestao A sugestão a ser criada.
   * @returns Um Observable contendo o objeto da sugestão criada.
   */
  criar(sugestao: Sugestao): Observable<Sugestao> {
    return this.http.post<Sugestao>(this.API, sugestao)
  }

  /**
   * Edita uma sugestão existente.
   * @param sugestao A sugestão a ser editada.
   * @returns Um Observable contendo o objeto da sugestão editada.
   */
  editar(sugestao: Sugestao): Observable<Sugestao> {
    const url = `${this.API}/${sugestao.id}`
    return this.http.put<Sugestao>(url, sugestao )
  }

  /**
   * Exclui uma sugestão pelo seu ID.
   * @param id O ID da sugestão a ser excluída.
   * @returns Um Observable contendo o objeto da sugestão excluída.
   */
  excluir(id: number): Observable<Sugestao> {
    const url = `${this.API}/${id}`
    return this.http.delete<Sugestao>(url)
  }

  /**
   * Busca uma sugestão pelo seu ID.
   * @param id O ID da sugestão a ser buscada.
   * @returns Um Observable contendo o objeto da sugestão encontrada.
   */
  buscarPorId(id: number): Observable<Sugestao> {
    const url = `${this.API}/${id}`
    return this.http.get<Sugestao>(url)
  }

}
