import { Component } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { Platform } from '@ionic/angular';
import { environment, firebaseConfig } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      initializeApp(firebaseConfig);
    });
  }

  public appPages = [
    { title: 'Personal Online', url: '/home', icon: 'person' },
    { title: 'Programas', url: '/programas', icon: 'fitness' },
    { title: 'Conteúdos', url: '/conteudos', icon: 'book' },
    { title: 'Configurações', url: '/configuracoes', icon: 'settings' },
    { title: 'Ajuda', url: '/ajuda', icon: 'help-circle' },
    { title: 'Sair', url: '/sair', icon: 'log-out' },
  ];
}
