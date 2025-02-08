import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-online-coach',
  templateUrl: './online-coach.component.html',
  styleUrls: ['./online-coach.component.scss'],
  imports: [IonicModule, CommonModule],
})
export class OnlineCoachComponent implements OnInit {
  cards: any[] = [
    {
      imageUrl: '../../../assets/images/lift.jpg',
      text: 'Novo Treino',
      footer: 'Lift',
    },
    {
      imageUrl: '../../../assets/images/yoga.jpg',
      text: 'Novo Treino',
      footer: 'Yoga',
    },

    {
      imageUrl: '../../../assets/images/spinning.jpg',
      text: 'Novo Treino',
      footer: 'Spinning',
    },
  ];

  activeCardIndex: number = 0;

  constructor() {}

  ngOnInit() {}

  onScroll(event: any) {
    // Calcula qual card está mais próximo do centro da visualização
    const container = event.target;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.querySelector('.card').offsetWidth;

    this.activeCardIndex = Math.round(scrollPosition / cardWidth);
  }
}
