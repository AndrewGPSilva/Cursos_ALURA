import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Angular melhor framework front-end',
      autoria: 'Andrew DEV',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Php é a melhor linguagem',
      autoria: 'Andrew DEV',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Laravel melhor framework back-end',
      autoria: 'Andrew DEV',
      modelo: 'modelo1'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
