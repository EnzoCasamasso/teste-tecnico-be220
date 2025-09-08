import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { IonIcon, IonImg } from '@ionic/angular/standalone';

export type HomeButtonProps = {
  label?: string;
  subLabel?: string;
  title?: string;
  subTitle?: string;
  icon?: string;
  image?: string;
};
@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.scss'],
  imports: [
    CommonModule,
    IonIcon,
    IonImg
]
})
export class HomeButtonComponent {
  @Input({ required: true }) props!: HomeButtonProps;
}
