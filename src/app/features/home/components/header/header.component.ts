import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, 
  IonToolbar, 
  IonButton, 
  IonIcon, 
  IonAvatar,
  IonLabel, 
  IonMenuButton,
  IonRow,
  IonCol,
  IonTitle,
  IonGrid,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [
    CommonModule,
    IonRow,
    IonCol,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonIcon,
    IonAvatar,
    IonLabel,
    IonMenuButton,
    IonGrid,
],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() bell = new EventEmitter<void>();
}

