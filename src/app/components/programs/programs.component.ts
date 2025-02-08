import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

interface ProgramCard {
  id: number;
  name: string;
  imageUrl: string;
  text: string;
  isStarted: boolean;
}

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
  imports: [CommonModule, IonicModule],
})
export class ProgramsComponent implements OnInit {
  cards: ProgramCard[] = [
    {
      id: 1,
      name: 'Programa Iniciante',
      imageUrl: '../../../assets/images/lift.jpg',
      text: 'Levantamento de peso',
      isStarted: true,
    },
    {
      id: 2,
      name: 'Programa Intermediário',
      imageUrl: '../../../assets/images/yoga.jpg',
      text: 'Yoga Experience',
      isStarted: false,
    },
    {
      id: 3,
      name: 'Programa Avançado',
      imageUrl: '../../../assets/images/spinning.jpg',
      text: 'Spinning',
      isStarted: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.loadPrograms();
  }

  loadPrograms(): void {
    // Aqui você pode adicionar a lógica para carregar os programas
  }

  toggleProgramStart(cardId: number): void {
    const card = this.cards.find((c) => c.id === cardId);
    if (card) {
      card.isStarted = !card.isStarted;
      card.text = card.isStarted ? 'Continuar Programa' : 'Começar Programa';
    }
  }
}
