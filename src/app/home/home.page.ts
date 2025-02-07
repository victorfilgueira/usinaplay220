import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  imports: [CommonModule, IonicModule, HeaderComponent],
  styleUrls: ['./home.page.scss'],
})
export class HomePage {}
