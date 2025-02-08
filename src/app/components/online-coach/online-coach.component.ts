import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TrainingCard } from 'src/app/interfaces/traning-card.interface';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-online-coach',
  templateUrl: './online-coach.component.html',
  styleUrls: ['./online-coach.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class OnlineCoachComponent implements OnInit {
  cards: TrainingCard[] = [
    {
      imageUrl: '../../../assets/images/lift.jpg',
      text: 'Novo Treino',
      footer: 'Lift',
    },
    {
      imageUrl: '../../../assets/images/yoga.jpg',
      text: 'Novo Treino',
      footer: 'Yoga Experience',
    },

    {
      imageUrl: '../../../assets/images/spinning.jpg',
      text: 'Novo Treino',
      footer: 'Spinning Experience',
    },
  ];

  activeCardIndex: number = 0;
  isModalOpen = false;
  newCard = {
    imageUrl: '',
    text: 'Novo Treino',
    footer: '',
  };

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    // this.loadTrainingCards();
  }

  loadTrainingCards(): void {
    this.firebaseService
      .getTrainingCards()
      .subscribe((cards: TrainingCard[]) => {
        this.cards = cards;
      });
  }

  onScroll(event: any) {
    const container = event.target;

    const scrollPosition = container.scrollLeft;
    const cardWidth = container.querySelector('.card').offsetWidth;

    this.activeCardIndex = Math.round(scrollPosition / cardWidth);
  }

  openCreateCardModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.newCard = {
      imageUrl: '',
      text: 'Novo Treino',
      footer: '',
    };
  }

  createCard() {
    // this.firebaseService.createTrainingCard({
    //   imageUrl: this.newCard.imageUrl,
    //   text: 'Novo Treino',
    //   footer: this.newCard.footer,
    // }).then(() => {
    //   this.loadTrainingCards();
    //   this.closeModal();
    // }).catch(error => {
    //   console.error('Erro ao criar card:', error);
    // });

    this.cards.push({
      imageUrl: this.newCard.imageUrl,
      text: 'Novo Treino',
      footer: this.newCard.footer,
    });
    this.closeModal();
  }
}
