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
  cards = [
    {
      imageUrl: '../../../assets/images/lift.jpg',
      text: 'Novo Treino',
    },
    {
      imageUrl: '../../../assets/images/yoga.jpg',
      text: 'Yoga',
    },
    {
      imageUrl: 'assets/images/treino-background-3.jpg',
      text: 'Novo Treino',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
