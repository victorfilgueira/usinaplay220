import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Personal Online', url: '/home', icon: 'person' },
    { title: 'Programas', url: '/programas', icon: 'fitness' },
    { title: 'Conteúdos', url: '/conteudos', icon: 'book' },
    { title: 'Configurações', url: '/configuracoes', icon: 'settings' },
    { title: 'Ajuda', url: '/ajuda', icon: 'help-circle' },
    { title: 'Sair', url: '/logout', icon: 'log-out' },
  ];
  public labels = [
    'Personal Online',
    'Programas',
    'Conteúdos',
    'Configurações',
    'Ajuda',
    'Sair',
  ];
  constructor() {}
}
