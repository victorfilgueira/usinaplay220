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
  constructor() {}

  ngOnInit() {}
}
