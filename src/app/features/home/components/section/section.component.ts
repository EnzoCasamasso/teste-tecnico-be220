import { CommonModule } from '@angular/common';
import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonTitle, IonBadge } from '@ionic/angular/standalone';
import { HomeButtonComponent } from '../home-button/home-button.component';
import { HomeButtonProps } from '../home-button/home-button.component';
@Component({
  selector: 'app-section',
  standalone: true,
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  imports: [CommonModule, IonTitle, IonBadge, HomeButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SectionComponent {
  @Input({ required: true }) title!: string;
  @Input() sectionIcon?: string;
  @Input() badge?: string;
  @Input({ required: true }) items: HomeButtonProps[] = [];
}
