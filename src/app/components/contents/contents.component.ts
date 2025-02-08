import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ContentCard } from '../../interfaces/content-card.interface';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss'],
  imports: [CommonModule, IonicModule],
})
export class ContentsComponent implements OnInit {
  cards: ContentCard[] = [
    {
      id: 1,
      name: '',
    },
    {
      id: 2,
      name: '',
    },
    {
      id: 3,
      name: '',
    },
  ];
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    //this.loadContents();
  }

  loadContents(): void {
    this.firebaseService.getContentCards().subscribe((cards: ContentCard[]) => {
      this.cards = cards;
    });
  }
}
