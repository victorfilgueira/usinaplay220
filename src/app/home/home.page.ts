import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../components/header/header.component';
import { OnlineCoachComponent } from '../components/online-coach/online-coach.component';
import { ProgramsComponent } from '../components/programs/programs.component';
import { ContentsComponent } from '../components/contents/contents.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  imports: [
    CommonModule,
    IonicModule,
    HeaderComponent,
    OnlineCoachComponent,
    ProgramsComponent,
    ContentsComponent,
  ],
  styleUrls: ['./home.page.scss'],
})
export class HomePage {}
