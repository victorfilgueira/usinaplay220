import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-profile-info',
  imports: [CommonModule, IonicModule],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileInfoComponent {}
