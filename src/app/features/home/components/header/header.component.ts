import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, 
  IonToolbar, 
  IonButtons, 
  IonButton, 
  IonIcon, 
  IonBadge, 
  IonAvatar,
  IonChip, 
  IonLabel, 
  IonMenuButton,
  IonItem,
  IonRow,
  IonCol,
  IonTitle,
  IonGrid,
  IonMenuToggle
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
    IonBadge,
    IonMenuToggle
],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() bell = new EventEmitter<void>();
}

